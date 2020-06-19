import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(username: String): User
    questionnaires: [Questionnaire!]!
  }

  type User {
    name: String
    username: String
  }

  type Questionnaire {
    id: ID!
    questionnaireTitle: String!
    name:String
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
const users = [
  { name: 'Leeroy Jenkins', username: 'leeroy' },
  { name: 'Foo Bar', username: 'foobar' },
]

const resolvers = {
  Query: {
    users() {
      return users
    },
    user(parent, { username }) {
      return users.find((user) => user.username === username)
    },
    questionnaires() {
      return prisma.questionnaire.findMany()
    }
  },
  Questionnaire: {
    questions(parent) {
      return prisma.question.findMany({where: { questionnaireId: parent.id}})
    }
  },
  Question: {
    answers(parent) {
      return prisma.answer.findMany({where: {questionId: parent.id}, take: 10})
    }
  }
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})