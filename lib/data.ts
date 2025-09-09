export const pythonStudyPlan = {
  title: 'Python',
  sections: [
    // 1. INTRODUCTION
    {
      title: 'Introduction to Python',
      order: 1,
      subsections: [
        {
          title: 'Getting Started',
          content:
            'Python is a popular, beginner-friendly programming language known for its readability and simplicity. It is widely used in web development, data science, automation, and artificial intelligence. With its large community and extensive libraries, Python makes it easier for beginners to learn and professionals to build powerful applications quickly.',
          example: `print("Hello, Python!")`,
        },
        {
          title: 'Running Python Code',
          content:
            'Python code can be executed in multiple ways. You can use an interactive shell (REPL) for testing, run scripts from the terminal, or work inside an IDE like PyCharm, VS Code, or Jupyter Notebook. This flexibility allows developers to experiment quickly or build larger applications as needed.',
          example: `# Save this as hello.py\nprint("Hello from a file!")\n# Run it in terminal: python hello.py`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Python was designed to be difficult for beginners.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which of the following is used to output text in Python?',
          options: ['echo()', 'console.log()', 'print()', 'printf()'],
          answer: 'print()',
        },
        {
          type: 'FILL_BLANK',
          question: 'Fill in the blank to print Hello World.',
          answer: "print('Hello World')",
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
            'In Python, you can create a variable simply by assigning a value with the equals sign. Unlike some languages, you don’t need to declare the type of the variable in advance. Python automatically decides the type based on the value given.',
          example: `x = 10\ny = "Hello"\nprint(x, y) # prints: 10 Hello`,
        },
        {
          title: 'Variable Naming Rules',
          content:
            "Python variables must follow certain naming rules. They must start with a letter or underscore and can contain letters, numbers, and underscores. They cannot contain spaces or use reserved keywords such as 'class' or 'def'.",
          example: `user_name = "Leo"\nage = 20\nprint(user_name, _age)`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question:
            'Variables in Python must be declared with a type before use.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which of these is a valid variable name?',
          options: ['2value', 'first-name', 'score', 'class'],
          answer: 'score',
        },
        {
          type: 'FILL_BLANK',
          question: 'Assign the number 50 to a variable named total.',
          answer: 'total = 50',
        },
      ],
    },

    // 3. DATA TYPES
    {
      title: 'Data Types',
      order: 3,
      subsections: [
        {
          title: 'Numbers',
          content:
            'Python supports integers (whole numbers), floats (decimal numbers), and complex numbers. Numbers are commonly used for arithmetic operations and calculations. You can easily perform addition, subtraction, multiplication, and division with them.',
          example: `a = 10\nb = 3.5\nc = a + b\nprint(c) # prints: 13.5`,
        },
        {
          title: 'Strings',
          content:
            'Strings are sequences of characters enclosed in quotes. They can contain letters, numbers, and symbols. Python provides many methods to manipulate strings such as concatenation, slicing, and formatting.',
          example: `name = "Python"\nprint(name.upper()) # prints: PYTHON\nprint(name[0]) # prints: P`,
        },
        {
          title: 'Booleans',
          content:
            'Booleans represent truth values: True or False. They are often the result of comparisons and are used in conditions to control program flow. Python treats 0, empty strings, and empty collections as False, while everything else is True.',
          example: `is_active = True\nprint(5 > 2)  # prints True`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'In Python, strings can only use double quotes.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which of these is a valid numbers operation?',
          options: ['slice', 'addition', 'concatenation', 'upper'],
          answer: 'addition',
        },
        {
          type: 'FILL_BLANK',
          question:
            'Fill in the blank to create a variable named num that has falsy number value.',
          answer: 'num = 0',
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
            'Python supports standard arithmetic operators such as addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), and floor division (//). These are used for numerical calculations.',
          example: `x = 10\ny = 3\nprint(x + y, x % y, x ** y) # prints: 13 1 1000`,
        },
        {
          title: 'Comparison Operators',
          content:
            'Comparison operators compare two values and return a Boolean (True or False). These include ==, !=, >, <, >=, and <=. They are often used in conditional statements.',
          example: `print(5 == 5) # True\nprint(7 > 10) # False`,
        },
        {
          title: 'Logical Operators',
          content:
            "Logical operators combine conditional statements. Python uses 'and', 'or', and 'not' to build more complex logical expressions. They help control the flow of decisions in programs.",
          example: `x = 5\ny = 10\nprint(x > 0 and y > 0) # True\nprint(not(x == y)) # True`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'The operator ** is used for modulus.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What is the result of 7 // 2?',
          options: ['3.5', '3', '4', '2'],
          answer: '3',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write an expression to check if x is greater than 10.',
          answer: 'x > 10',
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
            'The if statement is used to run code only when a condition is True. This allows your program to make decisions. Indentation is very important in Python to define the block of code controlled by if.',
          example: `x = 5\nif x > 0:\n    print("Positive number")`,
        },
        {
          title: 'If-Else',
          content:
            'You can add an else clause to run code when the condition is False. This makes your logic more complete and ensures one branch always executes.',
          example: `age = 18\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")`,
        },
        {
          title: 'Elif',
          content:
            "Python uses 'elif' for multiple conditions. Elif makes it easy to chain multiple comparisons without nesting too many ifs.",
          example: `score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: "Python uses 'switch' statements.",
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What keyword is used for multiple conditions?',
          options: ['elseif', 'elif', 'else if', 'switch'],
          answer: 'elif',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write a condition to check if num equals 10.',
          answer: 'if num == 10:',
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
            'For loops are used to iterate over sequences such as lists, strings, or ranges. They are very common for repeating actions for each item in a collection.',
          example: `for i in range(5):\n    print(i) # prints numbers 0 to 4`,
        },
        {
          title: 'While Loops',
          content:
            'A while loop continues running as long as the condition remains True. This is useful when the number of iterations isn’t known in advance.',
          example: `x = 0\nwhile x < 3:\n    print(x)\n    x += 1`,
        },
        {
          title: 'Break and Continue',
          content:
            'Break is used to exit the loop early, while continue skips the current iteration and goes to the next. These keywords provide more control over loop execution.',
          example: `for i in range(5):\n    if i == 3:\n        break\n    print(i)`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'A while loop always runs at least once.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question:
            'Which function is often used to generate sequences in for loops?',
          options: ['list()', 'sequence()', 'range()', 'loop()'],
          answer: 'range()',
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
            "Functions allow you to group reusable pieces of code. They are defined using the 'def' keyword followed by the function name and parameters. Functions help make code modular and easier to maintain.",
          example: `def greet():\n    print("Hello!")\ngreet()`,
        },
        {
          title: 'Parameters and Arguments',
          content:
            'Functions can accept parameters to make them flexible. When calling the function, values passed are called arguments. This makes functions more reusable for different inputs.',
          example: `def add(x, y):\n    print(x + y)`,
        },
        {
          title: 'Return Values',
          content:
            'Functions can return values using the return statement. If no return is specified, the function returns None by default.',
          example: `def square(n):\n    return n * n\nprint(square(5)) # 25`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'All functions in Python must return a value.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'Which keyword is used to define a function?',
          options: ['func', 'function', 'def', 'lambda'],
          answer: 'def',
        },
        {
          type: 'FILL_BLANK',
          question: 'Write a function named hello that prints Hello.',
          answer: "def hello():\n    print('Hello')",
        },
      ],
    },

    // 8. LISTS
    {
      title: 'Lists',
      order: 8,
      subsections: [
        {
          title: 'Creating Lists',
          content:
            'Lists are defined using square brackets and can store multiple values. They can contain different data types and allow duplicates.',
          example: `numbers = [1, 2, 3, 4]\nfruits = ["apple", "orange", "cherry"]`,
        },
        {
          title: 'Accessing and Modifying Lists',
          content:
            'List elements are accessed by index starting from 0. Since lists are mutable, you can change, add, or remove elements after creation.',
          example: `fruits = ["apple", "banana"]\nfruits[1] = "orange"\nprint(fruits) # prints: ["apple", "orange"]`,
        },
        {
          title: 'List Methods',
          content:
            'Python lists come with powerful methods like append(), remove(), sort(), and reverse(). These methods make working with collections easier and more efficient.',
          example: `colors = ["red", "blue"]\ncolors.append("green")\nprint(colors) # ["red", "blue", "green"]`,
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'Lists in Python are immutable.',
          answer: 'False',
        },
        {
          type: 'MCQ',
          question: 'What is the index of the first element in a Python list?',
          options: ['1', '0', '-1', 'first'],
          answer: '0',
        },
        {
          type: 'FILL_BLANK',
          question: 'Add 10 to the list numbers.',
          answer: 'numbers.append(10)',
        },
      ],
    },

    // 9. DICTIONARIES
    {
      title: 'Dictionaries',
      order: 9,
      subsections: [
        {
          title: 'Creating Dictionaries',
          content:
            'Dictionaries store data in key-value pairs. Keys must be unique, and values can be any data type.',
          example:
            "person = {'name': 'Alice', 'age': 25}\nprint(person['name']) # prints: Alice",
        },
        {
          title: 'Adding and Updating Items',
          content:
            'You can add new key-value pairs or update existing ones in a dictionary by assigning to a key.',
          example:
            "person['city'] = 'Paris'\nperson['age'] = 26\nprint(person) # prints: {'name': 'Alice', 'age': 26, 'city': 'Paris'}",
        },
      ],
      exercises: [
        {
          type: 'TRUE_FALSE',
          question: 'In Python, dictionary keys must be unique.',
          answer: 'True',
        },
        {
          type: 'MCQ',
          question:
            'Which of the following correctly creates a dictionary in Python?',
          answer: "{'name': 'Alice', 'age': 25}",
          options: [
            { text: "{'name': 'Alice', 'age': 25}" },
            { text: "['name': 'Alice', 'age': 25]" },
            { text: "('name': 'Alice', 'age': 25)" },
            { text: "{'Alice', 25}" },
          ],
        },
        {
          type: 'FILL_BLANK',
          question:
            'Create a dictionary named my_dict with key "color" and value "blue".',
          answer: 'my_dict = {"color": "blue"}',
        },
      ],
    },
  ],
}
