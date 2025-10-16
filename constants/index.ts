import { Difficulty } from '@prisma/client'

export const teamMembers = [
  {
    name: 'Azzam Al Kahil',
    colorClasses: 'bg-green-200 text-green-800',
    short: 'AK',
  },
  {
    name: 'Omar El-Ali',
    colorClasses: 'bg-yellow-200 text-yellow-800',
    short: 'OE',
  },
  {
    name: 'Moustafa Naji',
    colorClasses: 'bg-purple-200 text-purple-800',
    short: 'MN',
  },
]

export const coursesColors = {
  'Python': {
    bg: 'bg-blue-100',
    shadow: 'hover:shadow-blue-400',
    button: 'text-blue-600 group-hover:text-blue-700',
  },
  'Java': {
    bg: 'bg-red-100',
    shadow: 'hover:shadow-red-400',
    button: 'text-red-600 group-hover:text-red-700',
  },
  'JavaScript': {
    bg: 'bg-yellow-100',
    shadow: 'hover:shadow-yellow-400',
    button: 'text-yellow-600 group-hover:text-yellow-700',
  },
  'C++': {
    bg: 'bg-indigo-100',
    shadow: 'hover:shadow-indigo-400',
    button: 'text-indigo-600 group-hover:text-indigo-700',
  },
  'PHP': {
    bg: 'bg-purple-100',
    shadow: 'hover:shadow-purple-400',
    button: 'text-purple-600 group-hover:text-purple-700',
  },
  'Go': {
    bg: 'bg-cyan-100',
    shadow: 'hover:shadow-cyan-400',
    button: 'text-cyan-600 group-hover:text-cyan-700',
  },
}

export const testimonials = [
  {
    name: 'Jad Akeel',
    quote:
      'CodeLeb made learning to code feel like a game. I was hooked from the first lesson and now I feel confident in my skills!',
  },
  {
    name: 'Housam Benni',
    quote:
      'The step-by-step projects were a game-changer. I went from knowing nothing to building a full web application.',
  },
]

export const pythonChallenges = [
  {
    title: 'Sum Two Numbers',
    description:
      'Write a function that takes two numbers and returns their sum.',
    language: 'python',
    difficulty: Difficulty.EASY,
    xp: 50,
    starterCode: 'def sum_two_numbers(a, b):\n    pass',
    functionName: 'sum_two_numbers',
    studyPlanId: 'cmfe76r2o006ufgfciz9gnkjy',
    examples: {
      create: [
        { input: '2, 3', output: '5' },
        { input: '-5, 10', output: '5' },
      ],
    },
    testCases: {
      create: [
        { input: { a: 2, b: 3 }, output: 5 },
        { input: { a: -5, b: 10 }, output: 5 },
        { input: { a: 0, b: 0 }, output: 0 },
        { input: { a: 100, b: 200 }, output: 300 },
        { input: { a: -10, b: -20 }, output: -30 },
      ],
    },
  },
  {
    title: 'Factorial',
    description: 'Return the factorial of a given non-negative integer.',
    language: 'python',
    difficulty: Difficulty.EASY,
    xp: 60,
    starterCode: 'def factorial(n):\n    pass',
    functionName: 'factorial',
    studyPlanId: 'cmfe76r2o006ufgfciz9gnkjy',
    examples: {
      create: [
        { input: '5', output: '120' },
        { input: '0', output: '1' },
      ],
    },
    testCases: {
      create: [
        { input: { n: 0 }, output: 1 },
        { input: { n: 1 }, output: 1 },
        { input: { n: 5 }, output: 120 },
        { input: { n: 7 }, output: 5040 },
        { input: { n: 10 }, output: 3628800 },
      ],
    },
  },
  {
    title: 'Palindrome Check',
    description: 'Check if a given string is a palindrome.',
    language: 'python',
    difficulty: Difficulty.MEDIUM,
    xp: 100,
    starterCode: 'def is_palindrome(s):\n    pass',
    functionName: 'is_palindrome',
    studyPlanId: 'cmfe76r2o006ufgfciz9gnkjy',
    examples: {
      create: [
        { input: '"racecar"', output: 'True' },
        { input: '"hello"', output: 'False' },
      ],
    },
    testCases: {
      create: [
        { input: { s: 'racecar' }, output: true },
        { input: { s: 'hello' }, output: false },
        { input: { s: 'madam' }, output: true },
        { input: { s: 'step on no pets' }, output: true },
        { input: { s: 'python' }, output: false },
      ],
    },
  },
  {
    title: 'Fibonacci Sequence',
    description: 'Return the nth number in the Fibonacci sequence.',
    language: 'python',
    difficulty: Difficulty.MEDIUM,
    xp: 110,
    starterCode: 'def fibonacci(n):\n    pass',
    functionName: 'fibonacci',
    studyPlanId: 'cmfe76r2o006ufgfciz9gnkjy',
    examples: {
      create: [
        { input: '5', output: '5' },
        { input: '10', output: '55' },
      ],
    },
    testCases: {
      create: [
        { input: { n: 0 }, output: 0 },
        { input: { n: 1 }, output: 1 },
        { input: { n: 5 }, output: 5 },
        { input: { n: 10 }, output: 55 },
        { input: { n: 15 }, output: 610 },
      ],
    },
  },
  {
    title: 'Two Sum Problem',
    description:
      'Given an array of integers and a target, return indices of the two numbers that add up to the target.',
    language: 'python',
    difficulty: Difficulty.HARD,
    xp: 150,
    starterCode: 'def two_sum(nums, target):\n    pass',
    functionName: 'two_sum',
    studyPlanId: 'cmfe76r2o006ufgfciz9gnkjy',
    examples: {
      create: [
        { input: '[2,7,11,15], 9', output: '[0,1]' },
        { input: '[3,2,4], 6', output: '[1,2]' },
      ],
    },
    testCases: {
      create: [
        { input: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
        { input: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
        { input: { nums: [3, 3], target: 6 }, output: [0, 1] },
        { input: { nums: [1, 2, 3, 4, 5], target: 9 }, output: [3, 4] },
        { input: { nums: [10, 20, 30, 40], target: 50 }, output: [1, 3] },
      ],
    },
  },
  {
    title: 'Merge Sorted Arrays',
    description: 'Merge two sorted arrays into one sorted array.',
    language: 'python',
    difficulty: Difficulty.HARD,
    xp: 160,
    starterCode: 'def merge_sorted(a, b):\n    pass',
    functionName: 'merge_sorted',
    studyPlanId: 'cmfe76r2o006ufgfciz9gnkjy',
    examples: {
      create: [
        { input: '[1,3,5], [2,4,6]', output: '[1,2,3,4,5,6]' },
        { input: '[0], [0,1,2]', output: '[0,0,1,2]' },
      ],
    },
    testCases: {
      create: [
        { input: { a: [1, 3, 5], b: [2, 4, 6] }, output: [1, 2, 3, 4, 5, 6] },
        { input: { a: [0], b: [0, 1, 2] }, output: [0, 0, 1, 2] },
        { input: { a: [], b: [1, 2, 3] }, output: [1, 2, 3] },
        { input: { a: [5, 10], b: [1, 2, 3] }, output: [1, 2, 3, 5, 10] },
        { input: { a: [1, 2, 3], b: [] }, output: [1, 2, 3] },
      ],
    },
  },
]

export const javascriptChallenges = [
  // EASY
  {
    title: 'Check Prime Number',
    description: 'Write a function that checks if a given number is prime.',
    language: 'javascript',
    difficulty: Difficulty.EASY,
    xp: 50,
    starterCode: 'function isPrime(n) {\n    // your code here\n}',
    functionName: 'isPrime',
    studyPlanId: 'cmfe8t9xn008jfgfcmrxghhe3',
    examples: {
      create: [
        { input: '7', output: 'true' },
        { input: '10', output: 'false' },
      ],
    },
    testCases: {
      create: [
        { input: { n: 2 }, output: true },
        { input: { n: 3 }, output: true },
        { input: { n: 4 }, output: false },
        { input: { n: 17 }, output: true },
        { input: { n: 20 }, output: false },
      ],
    },
  },
  {
    title: 'Capitalize First Letter',
    description: 'Capitalize the first letter of each word in a string.',
    language: 'javascript',
    difficulty: Difficulty.EASY,
    xp: 60,
    starterCode: 'function capitalizeWords(str) {\n    // your code here\n}',
    functionName: 'capitalizeWords',
    studyPlanId: 'cmfe8t9xn008jfgfcmrxghhe3',
    examples: {
      create: [
        { input: '"hello world"', output: '"Hello World"' },
        { input: '"javascript is fun"', output: '"Javascript Is Fun"' },
      ],
    },
    testCases: {
      create: [
        { input: { str: 'hello world' }, output: 'Hello World' },
        { input: { str: 'javaScript is fun' }, output: 'JavaScript Is Fun' },
        { input: { str: 'open ai' }, output: 'Open Ai' },
      ],
    },
  },

  // MEDIUM
  {
    title: 'Rotate Array',
    description: 'Rotate the elements of an array to the right by k steps.',
    language: 'javascript',
    difficulty: Difficulty.MEDIUM,
    xp: 100,
    starterCode: 'function rotateArray(nums, k) {\n    // your code here\n}',
    functionName: 'rotateArray',
    studyPlanId: 'cmfe8t9xn008jfgfcmrxghhe3',
    examples: {
      create: [
        { input: '[1,2,3,4,5,6,7], 3', output: '[5,6,7,1,2,3,4]' },
        { input: '[-1,-100,3,99], 2', output: '[3,99,-1,-100]' },
      ],
    },
    testCases: {
      create: [
        {
          input: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 },
          output: [5, 6, 7, 1, 2, 3, 4],
        },
        { input: { nums: [-1, -100, 3, 99], k: 2 }, output: [3, 99, -1, -100] },
        { input: { nums: [1, 2], k: 3 }, output: [2, 1] },
      ],
    },
  },
  {
    title: 'First Non-Repeating Character',
    description:
      'Find the first non-repeating character in a string. Return its index, or -1 if it does not exist.',
    language: 'javascript',
    difficulty: Difficulty.MEDIUM,
    xp: 110,
    starterCode: 'function firstUniqueChar(s) {\n    // your code here\n}',
    functionName: 'firstUniqueChar',
    studyPlanId: 'cmfe8t9xn008jfgfcmrxghhe3',
    examples: {
      create: [
        { input: '"leetcode"', output: '0' },
        { input: '"loveleetcode"', output: '2' },
      ],
    },
    testCases: {
      create: [
        { input: { s: 'leetcode' }, output: 0 },
        { input: { s: 'loveleetcode' }, output: 2 },
        { input: { s: 'aabb' }, output: -1 },
        { input: { s: 'swiss' }, output: 1 },
      ],
    },
  },

  // HARD
  {
    title: 'Longest Substring Without Repeating Characters',
    description:
      'Find the length of the longest substring without repeating characters.',
    language: 'javascript',
    difficulty: Difficulty.HARD,
    xp: 150,
    starterCode:
      'function lengthOfLongestSubstring(s) {\n    // your code here\n}',
    functionName: 'lengthOfLongestSubstring',
    studyPlanId: 'cmfe8t9xn008jfgfcmrxghhe3',
    examples: {
      create: [
        { input: '"abcabcbb"', output: '3' },
        { input: '"bbbbb"', output: '1' },
      ],
    },
    testCases: {
      create: [
        { input: { s: 'abcabcbb' }, output: 3 },
        { input: { s: 'bbbbb' }, output: 1 },
        { input: { s: 'pwwkew' }, output: 3 },
        { input: { s: '' }, output: 0 },
      ],
    },
  },
  {
    title: 'Group Anagrams',
    description: 'Group words that are anagrams of each other.',
    language: 'javascript',
    difficulty: Difficulty.HARD,
    xp: 160,
    starterCode: 'function groupAnagrams(strs) {\n    // your code here\n}',
    functionName: 'groupAnagrams',
    studyPlanId: 'cmfe8t9xn008jfgfcmrxghhe3',
    examples: {
      create: [
        {
          input: '["eat","tea","tan","ate","nat","bat"]',
          output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
        },
      ],
    },
    testCases: {
      create: [
        {
          input: { strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] },
          output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
        },
        { input: { strs: [''] }, output: [['']] },
        { input: { strs: ['a'] }, output: [['a']] },
      ],
    },
  },
]

export const cPlusPlusChallenges = [
  // EASY
  {
    title: 'Count Vowels',
    description:
      'Write a function that takes a string and returns the number of vowels (a, e, i, o, u) present in it. Both uppercase and lowercase vowels should be counted.',
    language: 'c++',
    difficulty: Difficulty.EASY,
    xp: 50,
    starterCode:
      '#include <string>\n\nint countVowels(const std::string &s) {\n    // TODO: implement this\n}',
    functionName: 'countVowels',
    studyPlanId: 'cmfe9g21600bufgfcjps1e2g2',
    examples: {
      create: [
        { input: '"hello"', output: '2' },
        { input: '"WORLD"', output: '1' },
      ],
    },
    testCases: {
      create: [
        { input: { s: 'hello' }, output: 2 },
        { input: { s: 'WORLD' }, output: 1 },
        { input: { s: 'aeiou' }, output: 5 },
        { input: { s: 'xyz' }, output: 0 },
      ],
    },
  },
  {
    title: 'Sum of Digits',
    description:
      'Write a function that takes an integer and returns the sum of its digits. For example, the sum of digits of 123 is 1 + 2 + 3 = 6.',
    language: 'c++',
    difficulty: Difficulty.EASY,
    xp: 60,
    starterCode: 'int sumOfDigits(int n) {\n    // TODO: implement this\n}',
    functionName: 'sumOfDigits',
    studyPlanId: 'cmfe9g21600bufgfcjps1e2g2',
    examples: {
      create: [
        { input: '123', output: '6' },
        { input: '999', output: '27' },
      ],
    },
    testCases: {
      create: [
        { input: { n: 123 }, output: 6 },
        { input: { n: 999 }, output: 27 },
        { input: { n: 0 }, output: 0 },
        { input: { n: 4567 }, output: 22 },
      ],
    },
  },

  // MEDIUM
  {
    title: 'Valid Parentheses',
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1) Open brackets are closed by the same type of brackets. 2) Open brackets are closed in the correct order.",
    language: 'c++',
    difficulty: Difficulty.MEDIUM,
    xp: 100,
    starterCode:
      '#include <string>\n\nbool isValid(const std::string &s) {\n    // TODO: implement this\n}',
    functionName: 'isValid',
    studyPlanId: 'cmfe9g21600bufgfcjps1e2g2',
    examples: {
      create: [
        { input: '"()[]{}"', output: 'true' },
        { input: '"(]"', output: 'false' },
      ],
    },
    testCases: {
      create: [
        { input: { s: '()[]{}' }, output: true },
        { input: { s: '(]' }, output: false },
        { input: { s: '({[]})' }, output: true },
        { input: { s: '(((' }, output: false },
      ],
    },
  },
  {
    title: 'Find Majority Element',
    description:
      'Given an array of integers, find the majority element. The majority element is the element that appears more than ⌊n/2⌋ times. You may assume that the array is non-empty and the majority element always exists.',
    language: 'c++',
    difficulty: Difficulty.MEDIUM,
    xp: 120,
    starterCode:
      '#include <vector>\n\nint majorityElement(std::vector<int>& nums) {\n    // TODO: implement this\n}',
    functionName: 'majorityElement',
    studyPlanId: 'cmfe9g21600bufgfcjps1e2g2',
    examples: {
      create: [
        { input: '[3,2,3]', output: '3' },
        { input: '[2,2,1,1,1,2,2]', output: '2' },
      ],
    },
    testCases: {
      create: [
        { input: { nums: [3, 2, 3] }, output: 3 },
        { input: { nums: [2, 2, 1, 1, 1, 2, 2] }, output: 2 },
        { input: { nums: [1, 1, 1, 2, 3] }, output: 1 },
        { input: { nums: [5, 5, 5, 5, 2, 2] }, output: 5 },
      ],
    },
  },

  // HARD
  {
    title: 'Longest Increasing Subsequence (LIS)',
    description:
      'Given an integer array nums, return the length of the longest strictly increasing subsequence. A subsequence is derived from an array by deleting some or no elements without changing the order of the remaining elements.',
    language: 'c++',
    difficulty: Difficulty.HARD,
    xp: 160,
    starterCode:
      '#include <vector>\n\nint lengthOfLIS(std::vector<int>& nums) {\n    // TODO: implement this\n}',
    functionName: 'lengthOfLIS',
    studyPlanId: 'cmfe9g21600bufgfcjps1e2g2',
    examples: {
      create: [
        { input: '[10,9,2,5,3,7,101,18]', output: '4' },
        { input: '[0,1,0,3,2,3]', output: '4' },
      ],
    },
    testCases: {
      create: [
        { input: { nums: [10, 9, 2, 5, 3, 7, 101, 18] }, output: 4 },
        { input: { nums: [0, 1, 0, 3, 2, 3] }, output: 4 },
        { input: { nums: [7, 7, 7, 7] }, output: 1 },
        { input: { nums: [1, 3, 6, 7, 9, 4, 10, 5, 6] }, output: 6 },
      ],
    },
  },
  {
    title: 'Minimum Window Substring',
    description:
      'Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return an empty string.',
    language: 'c++',
    difficulty: Difficulty.HARD,
    xp: 180,
    starterCode:
      '#include <string>\n\nstd::string minWindow(std::string s, std::string t) {\n    // TODO: implement this\n}',
    functionName: 'minWindow',
    studyPlanId: 'cmfe9g21600bufgfcjps1e2g2',
    examples: {
      create: [
        { input: '"ADOBECODEBANC", "ABC"', output: '"BANC"' },
        { input: '"a", "a"', output: '"a"' },
      ],
    },
    testCases: {
      create: [
        { input: { s: 'ADOBECODEBANC', t: 'ABC' }, output: 'BANC' },
        { input: { s: 'a', t: 'a' }, output: 'a' },
        { input: { s: 'a', t: 'aa' }, output: '' },
        { input: { s: 'aa', t: 'aa' }, output: 'aa' },
      ],
    },
  },
]

export const javaChallenges = [
  {
    title: 'Edit Distance (Levenshtein Distance)',
    description:
      'Given two strings word1 and word2, return the minimum number of operations required to convert word1 into word2. The allowed operations are: \n' +
      '1) Insert a character\n' +
      '2) Delete a character\n' +
      '3) Replace a character\n\n',
    language: 'java',
    difficulty: Difficulty.HARD,
    xp: 160,
    starterCode:
      'public static int minDistance(String word1, String word2) {\n    // TODO: implement this\n}',
    functionName: 'minDistance',
    studyPlanId: 'cmfe8xyzz00a4fgfcek3ncmv4',
    examples: {
      create: [
        { input: '"horse", "ros"', output: '3' },
        { input: '"intention", "execution"', output: '5' },
      ],
    },
    testCases: {
      create: [
        { input: { word1: 'horse', word2: 'ros' }, output: 3 },
        { input: { word1: 'intention', word2: 'execution' }, output: 5 },
        { input: { word1: 'abc', word2: 'yabd' }, output: 2 }, // insert y, replace c with d
        { input: { word1: 'kitten', word2: 'sitting' }, output: 3 }, // replace k→s, e→i, add g
        { input: { word1: '', word2: 'abc' }, output: 3 }, // need 3 insertions
      ],
    },
  },
]

export const phpStudyPlan = {
  title: 'PHP',
  description:
    'Power the web with server-side scripting and dynamic applications',
  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  sections: [
    // 1. INTRODUCTION
    {
      title: 'Introduction to PHP',
      order: 1,
      subsections: [
        {
          title: 'Getting Started',
          content:
            'PHP is a widely-used, open-source scripting language especially suited for web development. It is a server-side language, meaning its code is executed on the server before the result is sent to the browser as plain HTML. It can be embedded directly into HTML files.',
          example: `<?php
  echo "Hello, PHP!";
?>`,
        },
        {
          title: 'Running PHP Code',
          content:
            'PHP code must be placed within <?php ... ?> tags. To run it, you need a web server with PHP installed (like Apache via XAMPP or MAMP). You save the file with a .php extension (e.g., index.php) and access it through a web browser.',
          example: `<h1>My First PHP Page</h1>
<?php
  echo "Hello from a file!";
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: "PHP code is executed on the client's browser.",
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'PHP scripts are enclosed within which tags?',
          options: [
            '<script>...</script>',
            '<?php...?>',
            '<php>...</php>',
            '{%...%}',
          ],
          answer: '<?php...?>',
        },
        {
          type: 'FILL_BLANK',
          question: 'Fill in the blank to print "Hello World".',
          answer: 'echo "Hello World";',
        },
      ],
    },

    // 2. VARIABLES
    {
      title: 'Variables',
      order: 2,
      subsections: [
        {
          title: 'Declaring Variables',
          content:
            "In PHP, all variables start with a dollar sign ($). You don't need to declare a variable's type before assigning a value; PHP automatically determines the type based on the value assigned.",
          example: `<?php
  $x = 10;
  $y = "Hello";
  echo $x; // prints: 10
  echo $y; // prints: Hello
?>`,
        },
        {
          title: 'Variable Naming Rules',
          content:
            'PHP variable names must start with a letter or an underscore, followed by any number of letters, numbers, or underscores. They are case-sensitive, meaning $age and $AGE are two different variables. They cannot start with a number.',
          example: `<?php
  $user_name = "Leo"; // Valid
  $age = 20; // Valid
  // $2_users = "Invalid";
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'In PHP, variables are case-insensitive.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which of these is a valid variable name in PHP?',
          options: ['2value', 'first-name', '$score', '$class'],
          answer: '$score',
        },
        {
          type: 'FILL_BLANK',
          question: 'Assign the number 50 to a variable named "total".',
          answer: '$total = 50;',
        },
      ],
    },

    // 3. DATA TYPES
    {
      title: 'Data Types',
      order: 3,
      subsections: [
        {
          title: 'Numbers (Integer & Float)',
          content:
            'PHP supports integers (whole numbers) and floating-point numbers (doubles, or decimals). These are used for all standard mathematical calculations.',
          example: `<?php
  $a = 10;     // Integer
  $b = 3.5;    // Float
  $c = $a + $b;
  echo $c;   // 13.5
?>`,
        },
        {
          title: 'Strings',
          content:
            'Strings are sequences of characters enclosed in quotes. You can use single (\'\') or double ("") quotes. Double quotes allow for variable interpolation, where variables inside the string are replaced with their values.',
          example: `<?php
  $name = "PHP";
  echo "Hello, $name!"; // Hello, PHP!
  echo 'Hello, $name!'; // Hello, $name!
?>`,
        },
        {
          title: 'Booleans',
          content:
            'Booleans represent two possible states: TRUE or FALSE. They are essential for conditional logic. In PHP, values like 0, an empty string "", and an empty array are considered FALSE in a boolean context.',
          example: `<?php
  $is_active = true;
  var_dump(5 > 2); // bool(true)
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question:
            'In PHP, single-quoted and double-quoted strings behave identically in all cases.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which of these values is considered "falsy" in PHP?',
          options: ['"0"', '1', 'true', '0'],
          answer: '0',
        },
        {
          type: 'FILL_BLANK',
          question:
            'Fill in the blank to concatenate the string "Hello" with the variable $name.',
          answer: '"Hello" . $name',
        },
      ],
    },

    // 4. OPERATORS
    {
      title: 'Operators',
      order: 4,
      subsections: [
        {
          title: 'Arithmetic & Concatenation Operators',
          content:
            'PHP uses standard arithmetic operators: +, -, *, /, and % (modulus). For strings, the concatenation operator is a period (.).',
          example: `<?php
  $x = 10;
  $y = 3;
  echo $x % $y; // 1
  $firstName = "John";
  $lastName = "Doe";
  echo $firstName . " " . $lastName; // John Doe
?>`,
        },
        {
          title: 'Comparison Operators',
          content:
            'Comparison operators are used to compare two values. Key operators include == (equal), === (identical, same value and type), != (not equal), >, <, >=, and <=.',
          example: `<?php
  var_dump(5 == "5");  // bool(true)
  var_dump(5 === "5"); // bool(false)
?>`,
        },
        {
          title: 'Logical Operators',
          content:
            "Logical operators are used to combine conditional statements. PHP uses '&&' (and), '||' (or), and '!' (not) to create complex logical expressions.",
          example: `<?php
  $x = 5;
  $y = 10;
  var_dump($x > 0 && $y > 0); // bool(true)
  var_dump(!($x == $y));      // bool(true)
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'In PHP, the operator `+` is used to concatenate strings.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What is the result of the expression `10 === "10"`?',
          options: ['true', 'false', '1', '0'],
          answer: 'false',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write an expression to check if $x is greater than 10.',
          answer: '$x > 10',
        },
      ],
    },

    // 5. CONDITIONS
    {
      title: 'Conditions',
      order: 5,
      subsections: [
        {
          title: 'If Statements',
          content:
            'The `if` statement executes a block of code if a specified condition is true. The code block is enclosed in curly braces {}.',
          example: `<?php
  $x = 5;
  if ($x > 0) {
    echo "Positive number";
  }
?>`,
        },
        {
          title: 'If-Else',
          content:
            'The `if...else` statement executes one block of code if the condition is true and another block if it is false.',
          example: `<?php
  $age = 17;
  if ($age >= 18) {
    echo "Adult";
  } else {
    echo "Minor";
  }
?>`,
        },
        {
          title: 'Elseif',
          content:
            "PHP uses 'elseif' to specify a new condition to test if the previous conditions were false. This allows for checking multiple conditions in sequence.",
          example: `<?php
  $score = 85;
  if ($score >= 90) {
    echo "A";
  } elseif ($score >= 80) {
    echo "B";
  } else {
    echo "C";
  }
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: "PHP uses the 'elif' keyword for multiple conditions.",
          answer: 'False',
        },
        {
          type: 'MCQ',
          question:
            'What punctuation is used to define a conditional code block?',
          options: [
            'Parentheses ()',
            'Square Brackets []',
            'Curly Braces {}',
            'Angle Brackets <>',
          ],
          answer: 'Curly Braces {}',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write a condition to check if $num equals 10.',
          answer: 'if ($num == 10)',
        },
      ],
    },

    // 6. LOOPS
    {
      title: 'Loops',
      order: 6,
      subsections: [
        {
          title: 'For Loops',
          content:
            'For loops are used when you know in advance how many times the script should run. It consists of an initializer, a condition, and an incrementer.',
          example: `<?php
  for ($i = 0; $i < 5; $i++) {
    echo $i; // prints numbers 0 to 4
  }
?>`,
        },
        {
          title: 'While Loops',
          content:
            'A while loop executes a block of code as long as the specified condition is true. It is useful when the number of iterations is not known beforehand.',
          example: `<?php
  $x = 0;
  while ($x < 3) {
    echo $x;
    $x++;
  }
?>`,
        },
        {
          title: 'Break and Continue',
          content:
            '`break` is used to exit a loop immediately. `continue` is used to skip the current iteration of the loop and move to the next one.',
          example: `<?php
  for ($i = 0; $i < 5; $i++) {
    if ($i == 3) {
      break; // Stops the loop when i is 3
    }
    echo $i; // Prints 012
  }
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question:
            "A `while` loop's condition is checked after the code block is executed.",
          answer: 'False',
        },
        {
          type: 'MCQ',
          question:
            'Which loop is best suited for iterating over the items in an array?',
          options: ['while', 'for', 'do-while', 'foreach'],
          answer: 'foreach',
        },
        {
          type: 'FILL_BLANK',
          question:
            'What is the keyword to skip the current iteration in a loop?',
          answer: 'continue',
        },
      ],
    },

    // 7. FUNCTIONS
    {
      title: 'Functions',
      order: 7,
      subsections: [
        {
          title: 'Defining Functions',
          content:
            "Functions are reusable blocks of code. They are defined using the 'function' keyword, followed by a name and parentheses. They help organize code into modular and manageable pieces.",
          example: `<?php
  function greet() {
    echo "Hello!";
  }
  greet(); // Calls the function
?>`,
        },
        {
          title: 'Parameters and Arguments',
          content:
            'Information can be passed to functions through parameters (listed inside the parentheses in the definition). When you call the function, you pass values called arguments.',
          example: `<?php
  function add($x, $y) {
    echo $x + $y;
  }
  add(5, 10); // 15
?>`,
        },
        {
          title: 'Return Values',
          content:
            'Functions can return a value back to the script using the `return` statement. This allows the result of a function to be stored in a variable or used in other operations.',
          example: `<?php
  function square($n) {
    return $n * $n;
  }
  $result = square(5);
  echo $result; // 25
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question:
            'A function in PHP that does not have a `return` statement will return `null`.',
          answer: 'True',
        },
        {
          type: 'MCQ',
          question: 'Which keyword is used to define a function in PHP?',
          options: ['func', 'function', 'def', 'define'],
          answer: 'function',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write a function named `hello` that prints "Hello".',
          answer: 'function hello() { echo "Hello"; }',
        },
      ],
    },

    // 8. ARRAYS
    {
      title: 'Arrays',
      order: 8,
      subsections: [
        {
          title: 'Indexed and Associative Arrays',
          content:
            'Arrays store multiple values in one variable. Indexed arrays use numeric keys (starting from 0). Associative arrays use named keys that you assign to them, making them similar to dictionaries or maps.',
          example: `<?php
  // Indexed array
  $fruits = ["apple", "orange", "cherry"];
  echo $fruits[1]; // orange

  // Associative array
  $person = ["name" => "Alice", "age" => 25];
  echo $person["name"]; // Alice
?>`,
        },
        {
          title: 'Accessing and Modifying Arrays',
          content:
            'You can access and modify array elements using their key inside square brackets []. You can add new elements by assigning a value to a new key.',
          example: `<?php
  $colors = ["red", "blue"];
  $colors[1] = "green"; // Modify element
  $colors[] = "yellow"; // Add new element to indexed array
  print_r($colors); // Array ( [0] => red [1] => green [2] => yellow )
?>`,
        },
        {
          title: 'Array Functions',
          content:
            'PHP has many powerful built-in functions for manipulating arrays, such as count() (to get the size), sort() (to sort), and array_push() (to add elements).',
          example: `<?php
  $numbers = [3, 1, 2];
  echo count($numbers); // 3
  sort($numbers);
  print_r($numbers); // Array ( [0] => 1 [1] => 2 [2] => 3 )
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'All arrays in PHP must use numeric keys.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question:
            'Which function is used to find the number of elements in an array?',
          options: ['size()', 'length()', 'count()', 'num()'],
          answer: 'count()',
        },
        {
          type: 'FILL_BLANK',
          question: 'Get the value of the "age" key from the array $person.',
          answer: '$person["age"]',
        },
      ],
    },

    // 9. OBJECT-ORIENTED PROGRAMMING (OOP)
    {
      title: 'Object-Oriented Programming (OOP)',
      order: 9,
      subsections: [
        {
          title: 'Classes and Objects',
          content:
            'A class is a blueprint for creating objects. An object is an instance of a class. Classes bundle data (properties) and functions that work on that data (methods) into a single unit.',
          example: `<?php
  class Car {
    // ...
  }
  $myCar = new Car(); // Creates a new object from the Car class
  var_dump($myCar);
?>`,
        },
        {
          title: 'Properties and Methods',
          content:
            'Properties are variables defined inside a class, and methods are functions defined inside a class. You use the `$this` pseudo-variable to access properties and methods from within the class.',
          example: `<?php
  class User {
    public $name = "Guest";

    function sayHello() {
      return "Hello, " . $this->name;
    }
  }
  $user1 = new User();
  $user1->name = "Alice";
  echo $user1->sayHello(); // Hello, Alice
?>`,
        },
        {
          title: 'Encapsulation',
          content:
            "Encapsulation is the concept of restricting direct access to an object's properties. PHP controls access using the keywords `public` (accessible from anywhere), `protected` (accessible within the class and its children), and `private` (accessible only within the class).",
          example: `<?php
  class Account {
    private $balance = 0;

    public function deposit($amount) {
      if ($amount > 0) {
        $this->balance += $amount;
      }
    }
  }
?>`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'An object is a blueprint for a class.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which keyword is used to create an object from a class?',
          options: ['object', 'create', 'new', 'instance'],
          answer: 'new',
        },
        {
          type: 'FILL_BLANK',
          question:
            'Inside a class method, what variable is used to refer to the current object?',
          answer: '$this',
        },
      ],
    },
  ],
}

export const phpChallenges = [
  // 🟢 EASY 1
  {
    title: 'Find Minimum in Array',
    description:
      'Write a function that takes an array of integers and returns the smallest number in the array.',
    language: 'php',
    difficulty: Difficulty.EASY,
    xp: 150,
    starterCode: 'function findMin($arr) {\n    // your code here\n}',
    functionName: 'findMin',
    studyPlanId: 'cmgch0lt5000lfg0wxidb26px',
    examples: {
      create: [
        { input: '[4, 2, 9, 1]', output: '1' },
        { input: '[-5, -2, -9]', output: '-9' },
      ],
    },
    testCases: {
      create: [
        { input: { arr: [4, 2, 9, 1] }, output: 1 },
        { input: { arr: [-5, -2, -9] }, output: -9 },
        { input: { arr: [7] }, output: 7 },
        { input: { arr: [10, 20, 5, 30] }, output: 5 },
        { input: { arr: [100, 99, 101] }, output: 99 },
      ],
    },
  },

  // 🟢 EASY 2
  {
    title: 'Even or Odd',
    description:
      'Write a function that takes an integer and returns "Even" if the number is even, otherwise returns "Odd".',
    language: 'php',
    difficulty: Difficulty.EASY,
    xp: 150,
    starterCode: 'function evenOrOdd($n) {\n    // your code here\n}',
    functionName: 'evenOrOdd',
    studyPlanId: 'cmgch0lt5000lfg0wxidb26px',
    examples: {
      create: [
        { input: '4', output: '"Even"' },
        { input: '7', output: '"Odd"' },
      ],
    },
    testCases: {
      create: [
        { input: { n: 4 }, output: 'Even' },
        { input: { n: 7 }, output: 'Odd' },
        { input: { n: 0 }, output: 'Even' },
        { input: { n: 13 }, output: 'Odd' },
        { input: { n: -2 }, output: 'Even' },
      ],
    },
  },

  // 🟡 MEDIUM 1
  {
    title: 'Remove Duplicates',
    description:
      'Write a function that removes duplicate numbers from an array and returns a new array with only unique values, keeping their original order.',
    language: 'php',
    difficulty: Difficulty.MEDIUM,
    xp: 300,
    starterCode: 'function removeDuplicates($arr) {\n    // your code here\n}',
    functionName: 'removeDuplicates',
    studyPlanId: 'cmgch0lt5000lfg0wxidb26px',
    examples: {
      create: [
        { input: '[1, 2, 2, 3, 1]', output: '[1, 2, 3]' },
        { input: '[5, 5, 5]', output: '[5]' },
      ],
    },
    testCases: {
      create: [
        { input: { arr: [1, 2, 2, 3, 1] }, output: [1, 2, 3] },
        { input: { arr: [5, 5, 5] }, output: [5] },
        { input: { arr: [10, 20, 10, 30] }, output: [10, 20, 30] },
        { input: { arr: [1, 2, 3] }, output: [1, 2, 3] },
        { input: { arr: [3, 3, 2, 1, 1] }, output: [3, 2, 1] },
      ],
    },
  },

  // 🟡 MEDIUM 2
  {
    title: 'Count Words',
    description:
      'Given a string, count and return the number of words in it. Words are separated by one or more spaces.',
    language: 'php',
    difficulty: Difficulty.MEDIUM,
    xp: 300,
    starterCode: 'function countWords($str) {\n    // your code here\n}',
    functionName: 'countWords',
    studyPlanId: 'cmgch0lt5000lfg0wxidb26px',
    examples: {
      create: [
        { input: '"Hello world"', output: '2' },
        { input: '"  PHP is  fun "', output: '3' },
      ],
    },
    testCases: {
      create: [
        { input: { str: 'Hello world' }, output: 2 },
        { input: { str: '  PHP is  fun ' }, output: 3 },
        { input: { str: 'one two three four' }, output: 4 },
        { input: { str: '' }, output: 0 },
        { input: { str: '   singleWord   ' }, output: 1 },
      ],
    },
  },

  // 🔴 HARD 1
  {
    title: 'Array Intersection',
    description:
      'Given two arrays, return an array containing only the elements that appear in both arrays. The result should not contain duplicates.',
    language: 'php',
    difficulty: Difficulty.HARD,
    xp: 600,
    starterCode:
      'function arrayIntersection($a, $b) {\n    // your code here\n}',
    functionName: 'arrayIntersection',
    studyPlanId: 'cmgch0lt5000lfg0wxidb26px',
    examples: {
      create: [
        { input: '[1, 2, 3], [2, 3, 4]', output: '[2, 3]' },
        { input: '[5, 6], [7, 8]', output: '[]' },
      ],
    },
    testCases: {
      create: [
        { input: { a: [1, 2, 3], b: [2, 3, 4] }, output: [2, 3] },
        { input: { a: [5, 6], b: [7, 8] }, output: [] },
        { input: { a: [1, 1, 2], b: [1, 2, 2] }, output: [1, 2] },
        { input: { a: [10, 20, 30], b: [30, 40, 10] }, output: [10, 30] },
        { input: { a: [], b: [1, 2, 3] }, output: [] },
      ],
    },
  },

  // 🔴 HARD 2
  {
    title: 'Longest Word in Sentence',
    description:
      'Write a function that returns the longest word in a given sentence. If there are multiple words with the same length, return the first one.',
    language: 'php',
    difficulty: Difficulty.HARD,
    xp: 600,
    starterCode: 'function longestWord($sentence) {\n    // your code here\n}',
    functionName: 'longestWord',
    studyPlanId: 'cmgch0lt5000lfg0wxidb26px',
    examples: {
      create: [
        { input: '"I love programming"', output: '"programming"' },
        { input: '"PHP is awesome"', output: '"awesome"' },
      ],
    },
    testCases: {
      create: [
        { input: { sentence: 'I love programming' }, output: 'programming' },
        { input: { sentence: 'PHP is awesome' }, output: 'awesome' },
        { input: { sentence: 'This is a test' }, output: 'This' },
        { input: { sentence: 'Code every single day' }, output: 'single' },
        { input: { sentence: 'Learning PHP is fun' }, output: 'Learning' },
      ],
    },
  },
]

export const goStudyPlan = {
  title: 'Go',
  description:
    'A fast, statically typed language designed for simplicity and performance',
  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  sections: [
    // 1. INTRODUCTION
    {
      title: 'Introduction to Go',
      order: 1,
      subsections: [
        {
          title: 'Getting Started',
          content:
            'Go (often called Golang) is an open-source programming language developed by Google. It focuses on simplicity, performance, and concurrency. It is widely used for backend systems, APIs, and cloud services due to its efficiency and scalability.',
          example: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
        },
        {
          title: 'Running Go Code',
          content:
            'Go programs are organized into packages and compiled before running. You can use an IDE like GoLand or VS Code, or simply run Go code from the terminal using the `go run` command.',
          example: `// Save this file as main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello from a file!")
}
// Run in terminal: go run main.go`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Go was created by Microsoft.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which command is used to run a Go file?',
          options: ['go execute', 'run gofile', 'go run', 'execute go'],
          answer: 'go run',
        },
        {
          type: 'FILL_BLANK',
          question: 'Print "Welcome to Go" to the console.',
          answer: `fmt.Println("Welcome to Go")`,
        },
      ],
    },

    // 2. VARIABLES
    {
      title: 'Variables',
      order: 2,
      subsections: [
        {
          title: 'Declaring Variables',
          content:
            'Go variables are declared using the `var` keyword followed by the name and type. You can also use shorthand `:=` for declaration and initialization together. Go is statically typed, so variable types are known at compile time.',
          example: `var name string = "Leo"
age := 21
fmt.Println(name, age)`,
        },
        {
          title: 'Constants',
          content:
            'Constants are declared using the `const` keyword. Their values cannot be changed once set. Constants are useful for fixed values like Pi, tax rates, or configuration flags.',
          example: `const Pi = 3.14
fmt.Println(Pi)`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question:
            'You can change the value of a Go constant after declaring it.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which of the following correctly declares a variable?',
          options: ['var x int = 10', 'x := 10', 'int x = 10', 'Both A and B'],
          answer: 'Both A and B',
        },
        {
          type: 'FILL_BLANK',
          question: 'Declare a constant named PI with a value of 3.14.',
          answer: 'const PI = 3.14',
        },
      ],
    },

    // 3. DATA TYPES
    {
      title: 'Data Types',
      order: 3,
      subsections: [
        {
          title: 'Basic Data Types',
          content:
            'Go has several basic data types such as int, float64, string, and bool. These are used for numbers, text, and logical values.',
          example: `var x int = 10
var y float64 = 3.5
var name string = "Go"
var active bool = true
fmt.Println(x, y, name, active)`,
        },
        {
          title: 'Zero Values',
          content:
            'When variables are declared without an initial value, Go assigns them a default "zero value". For example, numbers become 0, booleans become false, and strings become empty.',
          example: `var count int
var text string
fmt.Println(count, text) // 0 ""`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Uninitialized string variables in Go have a value of nil.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What is the zero value of a boolean in Go?',
          options: ['true', 'false', '0', 'nil'],
          answer: 'false',
        },
        {
          type: 'FILL_BLANK',
          question: 'Declare a float64 variable named price with value 9.99.',
          answer: 'var price float64 = 9.99',
        },
      ],
    },

    // 4. OPERATORS
    {
      title: 'Operators',
      order: 4,
      subsections: [
        {
          title: 'Arithmetic Operators',
          content:
            'Go supports +, -, *, /, and % for arithmetic operations. They work with numeric types and can be combined in expressions.',
          example: `a := 10
b := 3
fmt.Println(a+b, a%b)`,
        },
        {
          title: 'Comparison and Logical Operators',
          content:
            'Go provides ==, !=, >, <, >=, <= for comparisons and &&, ||, ! for logical operations.',
          example: `x, y := 5, 10
fmt.Println(x == y) // false
fmt.Println(x < y && y > 0) // true`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'The % operator performs exponentiation in Go.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which of these is a valid logical operator?',
          options: ['and', '||', 'not', 'xor'],
          answer: '||',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write an expression that checks if a equals b.',
          answer: 'a == b',
        },
      ],
    },

    // 5. CONDITIONS
    {
      title: 'Conditions',
      order: 5,
      subsections: [
        {
          title: 'If Statements',
          content:
            'Go uses `if` statements to control flow based on conditions. Parentheses are not required, but braces `{}` are mandatory.',
          example: `age := 18
if age >= 18 {
    fmt.Println("Adult")
}`,
        },
        {
          title: 'If-Else',
          content:
            'You can add an `else` clause for when the condition is false, and `else if` for multiple conditions.',
          example: `score := 85
if score >= 90 {
    fmt.Println("A")
} else if score >= 80 {
    fmt.Println("B")
} else {
    fmt.Println("C")
}`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Parentheses are required around if conditions in Go.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What keyword is used for multiple conditions in Go?',
          options: ['elseif', 'elif', 'else if', 'switch'],
          answer: 'else if',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write an if statement that prints "Positive" if x > 0.',
          answer: 'if x > 0 { fmt.Println("Positive") }',
        },
      ],
    },

    // 6. LOOPS
    {
      title: 'Loops',
      order: 6,
      subsections: [
        {
          title: 'For Loop',
          content:
            'Go has only one loop keyword: `for`. It can be used like a traditional loop, a while loop, or even an infinite loop.',
          example: `for i := 0; i < 5; i++ {
    fmt.Println(i)
}`,
        },
        {
          title: 'Range Loop',
          content:
            'The `range` keyword allows looping over slices, arrays, maps, and strings easily.',
          example: `nums := []int{1, 2, 3}
for i, v := range nums {
    fmt.Println(i, v)
}`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Go supports both for and while loops.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question:
            'Which keyword is used to loop through elements in a collection?',
          options: ['each', 'range', 'loop', 'iterate'],
          answer: 'range',
        },
        {
          type: 'FILL_BLANK',
          question: 'What is keyword to skip the current iteration in a loop?',
          answer: 'continue',
        },
      ],
    },

    // 7. FUNCTIONS
    {
      title: 'Functions',
      order: 7,
      subsections: [
        {
          title: 'Defining Functions',
          content:
            'Functions in Go are defined using the `func` keyword, followed by the name, parameters, and return type. Functions make your code reusable and organized.',
          example: `func greet() {
    fmt.Println("Hello!")
}
greet()`,
        },
        {
          title: 'Parameters and Returns',
          content:
            'Functions can take parameters and return one or more values. Go supports multiple return values, which is useful for error handling.',
          example: `func add(x int, y int) int {
    return x + y
}
fmt.Println(add(2, 3)) // 5`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Functions in Go can return multiple values.',
          answer: 'True',
        },
        {
          type: 'MCQ',
          question: 'Which keyword defines a function in Go?',
          options: ['func', 'function', 'def', 'fn'],
          answer: 'func',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write a function named square that returns n * n.',
          answer: 'func square(n int) int { return n * n }',
        },
      ],
    },

    // 8. ARRAYS
    {
      title: 'Arrays',
      order: 8,
      subsections: [
        {
          title: 'Creating Arrays',
          content:
            'Arrays in Go have a fixed size and hold elements of the same type. Their size is defined at declaration.',
          example: `var numbers [3]int = [3]int{1, 2, 3}
fmt.Println(numbers)`,
        },
        {
          title: 'Accessing and Modifying',
          content:
            'You can access array elements using their index and modify them directly.',
          example: `numbers := [3]int{1, 2, 3}
numbers[1] = 5
fmt.Println(numbers) // [1 5 3]`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Arrays in Go can dynamically change their size.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What is the index of the first element in a Go array?',
          options: ['1', '0', '-1', 'first'],
          answer: '0',
        },
        {
          type: 'FILL_BLANK',
          question: 'Declare an array of 3 integers named nums.',
          answer: 'var nums [3]int',
        },
      ],
    },

    // 9. OOP (STRUCTS & METHODS)
    {
      title: 'OOP (Structs & Methods)',
      order: 9,
      subsections: [
        {
          title: 'Structs',
          content:
            'Go does not have traditional classes, but it supports structs, which group related data together. Structs are the foundation of object-oriented design in Go.',
          example: `type Person struct {
    Name string
    Age  int
}

p := Person{Name: "Leo", Age: 20}
fmt.Println(p.Name)`,
        },
        {
          title: 'Methods',
          content:
            'Methods in Go are functions with a receiver. They allow struct instances to have associated behaviors.',
          example: `type Rectangle struct {
    Width, Height int
}

func (r Rectangle) Area() int {
    return r.Width * r.Height
}

rect := Rectangle{5, 3}
fmt.Println(rect.Area()) // 15`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Go supports inheritance between structs.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What keyword defines a struct in Go?',
          options: ['struct', 'class', 'type', 'record'],
          answer: 'type',
        },
        {
          type: 'FILL_BLANK',
          question:
            'Create a struct named Car with a field Brand of type string.',
          answer: 'type Car struct { Brand string }',
        },
      ],
    },
  ],
}

export const goChallenges = [
  // 🟢 EASY 1
  {
    title: 'Find Maximum in Array',
    description:
      'Write a function that takes an array of integers and returns the largest number in the array.',
    language: 'go',
    difficulty: Difficulty.EASY,
    xp: 150,
    starterCode:
      'func findMax(arr []int) int {\n    // your code here\n    return 0\n}',
    functionName: 'findMax',
    studyPlanId: 'cmgdx9wr6000cfgfc5wfnojhe',
    examples: {
      create: [
        { input: '[4, 2, 9, 1]', output: '9' },
        { input: '[-5, -2, -9]', output: '-2' },
      ],
    },
    testCases: {
      create: [
        { input: { arr: [4, 2, 9, 1] }, output: 9 },
        { input: { arr: [-5, -2, -9] }, output: -2 },
        { input: { arr: [7] }, output: 7 },
        { input: { arr: [10, 20, 5, 30] }, output: 30 },
        { input: { arr: [100, 99, 101] }, output: 101 },
      ],
    },
  },

  // 🟢 EASY 2
  {
    title: 'Count Even Numbers',
    description:
      'Write a function that takes an array of integers and returns how many of them are even numbers.',
    language: 'go',
    difficulty: Difficulty.EASY,
    xp: 150,
    starterCode:
      'func countEvens(arr []int) int {\n    // your code here\n    return 0\n}',
    functionName: 'countEvens',
    studyPlanId: 'cmgdx9wr6000cfgfc5wfnojhe',
    examples: {
      create: [
        { input: '[1, 2, 3, 4, 6]', output: '3' },
        { input: '[5, 7, 9]', output: '0' },
      ],
    },
    testCases: {
      create: [
        { input: { arr: [1, 2, 3, 4, 6] }, output: 3 },
        { input: { arr: [5, 7, 9] }, output: 0 },
        { input: { arr: [2, 4, 6, 8] }, output: 4 },
        { input: { arr: [1, 3, 5, 7] }, output: 0 },
        { input: { arr: [] }, output: 0 },
      ],
    },
  },

  // 🟡 MEDIUM 1
  {
    title: 'Remove Specific Element',
    description:
      'Write a function that removes all occurrences of a given element from an array and returns the new array.',
    language: 'go',
    difficulty: Difficulty.MEDIUM,
    xp: 300,
    starterCode:
      'func removeElement(arr []int, target int) []int {\n    // your code here\n    return []int{}\n}',
    functionName: 'removeElement',
    studyPlanId: 'cmgdx9wr6000cfgfc5wfnojhe',
    examples: {
      create: [
        { input: '[3, 2, 2, 3], 3', output: '[2, 2]' },
        { input: '[1, 2, 3, 4, 2], 2', output: '[1, 3, 4]' },
      ],
    },
    testCases: {
      create: [
        { input: { arr: [3, 2, 2, 3], target: 3 }, output: [2, 2] },
        { input: { arr: [1, 2, 3, 4, 2], target: 2 }, output: [1, 3, 4] },
        { input: { arr: [1, 1, 1], target: 1 }, output: [] },
        { input: { arr: [5, 6, 7], target: 8 }, output: [5, 6, 7] },
        { input: { arr: [], target: 1 }, output: [] },
      ],
    },
  },

  // 🟡 MEDIUM 2
  {
    title: 'Find kth Largest Number',
    description:
      'Write a function that returns the kth largest number in an array. Assume 1 ≤ k ≤ length of array.',
    language: 'go',
    difficulty: Difficulty.MEDIUM,
    xp: 300,
    starterCode:
      'func findKthLargest(arr []int, k int) int {\n    // your code here\n    return 0\n}',
    functionName: 'findKthLargest',
    studyPlanId: 'cmgdx9wr6000cfgfc5wfnojhe',
    examples: {
      create: [
        { input: '[3, 2, 1, 5, 6, 4], 2', output: '5' },
        { input: '[7, 10, 4, 3, 20, 15], 3', output: '10' },
      ],
    },
    testCases: {
      create: [
        { input: { arr: [3, 2, 1, 5, 6, 4], k: 2 }, output: 5 },
        { input: { arr: [7, 10, 4, 3, 20, 15], k: 3 }, output: 10 },
        { input: { arr: [1, 2, 3, 4, 5], k: 1 }, output: 5 },
        { input: { arr: [1, 2, 3, 4, 5], k: 5 }, output: 1 },
        { input: { arr: [9, 8, 7, 6], k: 2 }, output: 8 },
      ],
    },
  },

  // 🔴 HARD 1
  {
    title: 'Subarray Sum Equals K',
    description:
      'Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals to k.',
    language: 'go',
    difficulty: Difficulty.HARD,
    xp: 600,
    starterCode:
      'func subarraySum(nums []int, k int) int {\n    // your code here\n    return 0\n}',
    functionName: 'subarraySum',
    studyPlanId: 'cmgdx9wr6000cfgfc5wfnojhe',
    examples: {
      create: [
        { input: '[1, 1, 1], 2', output: '2' },
        { input: '[1, 2, 3], 3', output: '2' },
      ],
    },
    testCases: {
      create: [
        { input: { nums: [1, 1, 1], k: 2 }, output: 2 },
        { input: { nums: [1, 2, 3], k: 3 }, output: 2 },
        { input: { nums: [3, 4, 7, 2, -3, 1, 4, 2], k: 7 }, output: 4 },
        { input: { nums: [1, -1, 0], k: 0 }, output: 3 },
        { input: { nums: [], k: 0 }, output: 0 },
      ],
    },
  },

  // 🔴 HARD 2
  {
    title: 'Find Missing Number',
    description:
      'Given an array containing n distinct numbers from 0 to n, find the one number that is missing from the array.',
    language: 'go',
    difficulty: Difficulty.HARD,
    xp: 600,
    starterCode:
      'func missingNumber(nums []int) int {\n    // your code here\n    return 0\n}',
    functionName: 'missingNumber',
    studyPlanId: 'cmgdx9wr6000cfgfc5wfnojhe',
    examples: {
      create: [
        { input: '[3, 0, 1]', output: '2' },
        { input: '[0, 1]', output: '2' },
      ],
    },
    testCases: {
      create: [
        { input: { nums: [3, 0, 1] }, output: 2 },
        { input: { nums: [0, 1] }, output: 2 },
        { input: { nums: [9, 6, 4, 2, 3, 5, 7, 0, 1] }, output: 8 },
        { input: { nums: [1] }, output: 0 },
        { input: { nums: [0] }, output: 1 },
      ],
    },
  },
]
