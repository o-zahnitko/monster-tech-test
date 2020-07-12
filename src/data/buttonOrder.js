const buttonOrder = [
  {
    compact: false,
    displayValue: '(',
    texRequired: false,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: ')',
    texRequired: false,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'mc',
    texRequired: false,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'm+',
    texRequired: false,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'm-',
    texRequired: false,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'mr',
    texRequired: false,
    type: 'tertiaryFunction',
  },
  {
    compact: true,
    displayValue: 'C',
    role: 'clear',
    texRequired: false,
    type: 'secondaryFunction',
  },
  {
    compact: true,
    displayValue: '+/-',
    role: 'negate',
    texRequired: false,
    type: 'secondaryFunction',
  },
  {
    compact: true,
    displayValue: '%',
    role: 'percentage',
    texRequired: false,
    type: 'secondaryFunction',
  },
  {
    compact: true,
    displayValue: '÷',
    role: 'division',
    texRequired: false,
    type: 'primaryFunction',
  },
  {
    compact: false,
    displayValue: '2^{nd}',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'x^2',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'x^3',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'x^y',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'e^x',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: '10^x',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: true,
    displayValue: '7',
    role: '7',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '8',
    role: '8',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '9',
    role: '9',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '×',
    role: 'multiplication',
    texRequired: false,
    type: 'primaryFunction',
  },
  {
    compact: false,
    displayValue: '\\frac{1}{x}',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: '\\sqrt[2]x',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: '\\sqrt[3]x',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: '\\sqrt[y]x',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'In',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'log_{10}',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: true,
    displayValue: '4',
    role: '4',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '5',
    role: '5',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '6',
    role: '6',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '-',
    role: 'subtraction',
    texRequired: false,
    type: 'primaryFunction',
  },
  {
    compact: false,
    displayValue: 'x!',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'sin',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'cos',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'tan',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'e',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'EE',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: true,
    displayValue: '1',
    role: '1',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '2',
    role: '2',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '3',
    role: '3',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '+',
    role: 'addition',
    texRequired: false,
    type: 'primaryFunction',
  },
  {
    compact: false,
    displayValue: 'Rad',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'Sinh',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'cosh',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'tanh',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: '\\pi',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: false,
    displayValue: 'Rand',
    texRequired: true,
    type: 'tertiaryFunction',
  },
  {
    compact: true,
    displayValue: '0',
    role: '0',
    span: 2,
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '.',
    role: '.',
    texRequired: false,
    type: 'input',
  },
  {
    compact: true,
    displayValue: '=',
    role: 'equals',
    texRequired: false,
    type: 'primaryFunction',
  },
];

export default buttonOrder;
