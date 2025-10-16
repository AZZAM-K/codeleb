import { python } from '@codemirror/lang-python'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { cpp } from '@codemirror/lang-cpp'
import { php } from '@codemirror/lang-php'
import { go } from '@codemirror/lang-go'

export const getLanguageExtension = (language: string) => {
  switch (language) {
    case 'python':
      return python()
    case 'java':
      return java()
    case 'javascript':
      return javascript()
    case 'c++':
      return cpp()
    case 'php':
      return php({ plain: true })
    case 'go':
      return go()
    default:
      throw new Error(`Unsupported language: ${language}`)
  }
}

export const formatArgs = (
  input: Record<string, unknown>,
  lang: string
): string => {
  switch (lang) {
    case 'python':
      return Object.entries(input)
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .join(', ')
    case 'javascript':
      return Object.entries(input)
        .map(([key, value]) => `${JSON.stringify(value)}`)
        .join(', ')
    case 'java':
      return Object.values(input)
        .map(value => {
          if (Array.isArray(value)) {
            if (value.length > 0 && Array.isArray(value[0])) {
              // Handle 2D array
              return `new int[][] {${value
                .map(row => `new int[] {${row.join(',')}}`)
                .join(',')}}`
            }
            // Handle 1D array
            return `new int[] {${value.join(',')}}`
          }
          if (typeof value === 'string') {
            return `"${value}"` // String literals in Java use double quotes
          }
          return value
        })
        .join(', ')
    case 'c++':
      return '' // C++ args are handled directly in the template
    case 'php':
      return Object.values(input)
        .map(value => {
          if (Array.isArray(value)) {
            return `array(${value.map(v => JSON.stringify(v)).join(',')})`
          }
          return JSON.stringify(value)
        })
        .join(', ')
    case 'go':
      return Object.values(input)
        .map(value => {
          if (Array.isArray(value)) {
            // For empty arrays, assume int type since it's most common
            if (value.length === 0) {
              return '[]int{}'
            }
            // For non-empty arrays, determine type from first element
            const firstElement = value[0]
            const type = typeof firstElement
            switch (type) {
              case 'number':
                return `[]int{${value.join(', ')}}`
              case 'string':
                return `[]string{${value
                  .map(v => JSON.stringify(v))
                  .join(', ')}}`
              case 'boolean':
                return `[]bool{${value.join(', ')}}`
              default:
                // If type is unknown, still use int for empty arrays
                if (value.every(v => v === null || v === undefined)) {
                  return '[]int{}'
                }
                return `[]interface{}{${value
                  .map(v =>
                    v === null || v === undefined ? 'nil' : JSON.stringify(v)
                  )
                  .join(', ')}}`
            }
          }
          if (typeof value === 'string') {
            return JSON.stringify(value)
          }
          return value
        })
        .join(', ')
    default:
      throw new Error(`Unsupported language: ${lang}`)
  }
}
