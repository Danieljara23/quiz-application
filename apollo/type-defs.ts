import gql from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(username: String): User
    questionnaires: [Questionnaire!]!
    questionnaire(id: ID): Questionnaire!
  }

  type Mutation {
    createAnswer(description: String!, isCorrect: Boolean!, questionId: ID): Answer
    createQuestion(questionTitle: String!, questionnaireId: ID): Question
    # createQuestionnaire(questionnaireTitle: String!, questions: [Question]!): Questionnaire
  }

  type User {
    name: String
    username: String
  }

  type Questionnaire {
    id: ID!
    questionnaireTitle: String!
    description: String!
    imageUrl: String
    questions: [Question]
  }
  
  type Question {
    id: ID!
    questionTitle:String!
    answers: [Answer]
  }

  type Answer {
    id: ID!
    description:String!
    isCorrect:Boolean!
  }
`