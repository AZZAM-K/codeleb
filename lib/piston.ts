import { formatArgs } from '@/lib/utils'
import { PistonExecuteRequest, PistonExecuteResponse } from '@/types'

const PISTON_API = 'https://emkc.org/api/v2/piston'
const languageConfigs = {
  python: { version: '3.10', extension: '.py' },
  java: { version: '15.0.2', extension: '.java' },
  javascript: { version: '18.15.0', extension: '.js' },
  'c++': { version: '10.2.0', extension: '.cpp' },
  php: { version: '8.2.3', extension: '.php' },
  go: { version: '1.16.2', extension: '.go' },
}

export async function executeCode(
  language: string,
  code: string,
  input: string = ''
): Promise<PistonExecuteResponse> {
  const config = languageConfigs[language as keyof typeof languageConfigs]
  if (!config) {
    throw new Error(`Unsupported language: ${language}`)
  }

  const request: PistonExecuteRequest = {
    language,
    version: config.version,
    files: [
      {
        name: `solution${config.extension}`,
        content: code,
      },
    ],
    stdin: input,
  }

  const response = await fetch(`${PISTON_API}/execute`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })

  if (!response.ok) {
    throw new Error(`Failed to execute code: ${response.statusText}`)
  }

  return response.json()
}

export function generateTestRunner(
  language: string,
  functionName: string,
  solution: string,
  testCase: { input: Record<string, unknown>; output: unknown }
): string {
  const args = formatArgs(testCase.input, language)

  switch (language) {
    case 'python':
      return `${solution}

result = ${functionName}(${args})
print(repr(result))`

    case 'javascript':
      return `${solution}

const result = ${functionName}(${args});
console.log(JSON.stringify(result));`

    case 'java':
      return `import java.util.*;
      import java.math.*;

      public class Main {
        ${solution}
        
        public static void main(String[] args) {
            Object result = ${functionName}(${args});
            String output;
            if (result == null) {
                output = "null";
            } else if (result.getClass().isArray()) {
                Class<?> componentType = result.getClass().getComponentType();
                if (componentType != null && componentType.isArray()) {
                    // 2D array (e.g., int[][], String[][])
                    output = Arrays.deepToString((Object[]) result);
                } else {
                    // 1D array
                    if (componentType == int.class) {
                        output = Arrays.toString((int[]) result);
                    } else if (componentType == char.class) {
                        output = Arrays.toString((char[]) result);
                    } else if (componentType == boolean.class) {
                        output = Arrays.toString((boolean[]) result);
                    } else if (componentType == double.class) {
                        output = Arrays.toString((double[]) result);
                    } else {
                        output = Arrays.toString((Object[]) result);
                    }
                }
            } else {
                output = String.valueOf(result);
            }
            System.out.println(output);
        }
    }`

    case 'c++':
      return `#include <iostream>
${solution}

int main() {
    ${Object.entries(testCase.input)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `std::vector<int> ${key} = {${value.join(', ')}};`
        }
        return `auto ${key} = ${JSON.stringify(value)};`
      })
      .join('\n    ')}
    std::cout << ${functionName}(${Object.keys(testCase.input).join(
        ', '
      )}) << std::endl;
    return 0;
}`

    case 'php':
      return `<?php
${solution}

$result = ${functionName}(${args});
if (is_array($result)) {
    echo json_encode($result);
} else if (is_null($result)) {
    echo "null";
} else {
    echo json_encode($result);
}
?>`

    case 'go':
      return `package main

import (
    "encoding/json"
    "fmt"
    "reflect"
)

${solution}

func main() {
    result := ${functionName}(${args})
    
    // Get the type of result
    rt := reflect.TypeOf(result)
    
    // Handle slices
    if rt != nil && rt.Kind() == reflect.Slice {
        if jsonBytes, err := json.Marshal(result); err == nil {
            fmt.Print(string(jsonBytes))
            return
        }
    }
    
    // Handle strings separately to ensure proper quoting
    if rt != nil && rt.Kind() == reflect.String {
        fmt.Printf("%q", result)
        return
    }
    
    // For all other types (int, float, bool, etc)
    fmt.Print(result)
}`

    default:
      throw new Error(`Unsupported language: ${language}`)
  }
}

export function compareOutputs(
  expected: unknown,
  actual: string | null | undefined,
  language: string
): boolean {
  if (actual === null || actual === undefined) {
    return false
  }

  // Clean up the actual output (remove newlines, trim spaces)
  const cleanedActual = actual.trim()

  // Try to parse the actual output if it looks like JSON
  let parsedActual: unknown = cleanedActual
  try {
    if (cleanedActual.startsWith('[') || cleanedActual.startsWith('{')) {
      parsedActual = JSON.parse(cleanedActual)
    }
  } catch {
    // If parsing fails, use the original string
  }

  // For array comparison, normalize both to JSON strings without spaces
  if (Array.isArray(expected)) {
    const normalizedExpected = JSON.stringify(expected).replace(/\s/g, '')
    const normalizedActual = JSON.stringify(parsedActual).replace(/\s/g, '')
    return normalizedExpected === normalizedActual
  }

  // For string comparison
  if (typeof expected === 'string') {
    // For C++, the output won't have quotes
    if (language === 'c++') {
      return cleanedActual === expected
    }
    // For Python, check both with and without quotes
    if (language === 'python') {
      const unquoted = expected
      const quoted = `'${expected}'` // Python uses single quotes in repr()
      return cleanedActual === unquoted || cleanedActual === quoted
    }
    // For other languages (JavaScript, Java), the output will be JSON stringified
    const normalizedExpected = JSON.stringify(expected)
    return cleanedActual === normalizedExpected || cleanedActual === expected
  }

  // For other types, use JSON stringification
  const expectedStr = JSON.stringify(expected)
  return cleanedActual === expectedStr
}
