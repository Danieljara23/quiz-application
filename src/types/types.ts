export interface Questionnaire {
  questionnaireTitle: string
  description: string
  questions: Question[]
}

export interface Question {
  questionTitle: string
  enableEdition: boolean
  answers: Answer[]
}

export interface Answer {
  description: string
  isCorrect: boolean
}
