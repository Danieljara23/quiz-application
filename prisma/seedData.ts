const seedData = {
  imageUrl: "https://www.art-madrid.com/image/yfwKqHReBwEmfBoPA/0/nos-acercamos-a-conocer-el-arte-fractal.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  questionnaireTitle: "Cuestionario 1",
  questions: {
    create: [
      {
        questionTitle: "¿Una fracción impropia es cuando?",
        answers: {
          create: [
            { description: "El numerador es mayor al denominador", isCorrect: true },
            { description: "El numerador es menor al denominador", isCorrect: false },
            { description: "El numerador es igual a denominador", isCorrect: false },
          ]
        }
      },
      {
        questionTitle: "¿Para cuál de las siguientes operaciones matemáticas no aplica la propiedad distributiva?",
        answers: {
          create: [
            { description: "Suma", isCorrect: false },
            { description: "Diferencia", isCorrect: false },
            { description: "División", isCorrect: true },
            { description: "Multiplicación", isCorrect: false },
          ]
        }
      },
      {
        questionTitle: "La multiplicación de fraccionarios se resuelve de la siguiente manera",
        answers: {
          create: [
            { description: "Multiplicando numeradores con numeradores y denominadores con denominadores.", isCorrect: true },
            { description: "Multiplicando numeradores con denominadores de ambas fracciones y sumando el resultado de cada uno.", isCorrect: false },
            { description: "Sumando denominadores y multiplicando numeradores.", isCorrect: false },
          ]
        }
      },
      {
        questionTitle: "¿En potenciación existe una propiedad llamada 'potencia de una potencia'?",
        answers: {
          create: [
            { description: "Verdadero", isCorrect: true },
            { description: "Falso", isCorrect: false },
          ]
        }
      }
    ]
  }
}

module.exports = {
  seedData
}