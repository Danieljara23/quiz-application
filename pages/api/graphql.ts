import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(username: String): User
    questionnaires: [Questionnaire!]!
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
    questionnaires(parent, args, ctx) {
      return ctx.prisma.questionnaire.findMany()
    }
  },
  Questionnaire: {
    questions(parent,args, ctx) {
      return ctx.prisma.question.findMany({where: { questionnaireId: parent.id}})
    }
  },
  Question: {
    answers(parent,args, ctx) {
      return ctx.prisma.answer.findMany({where: {questionId: parent.id}, take: 10})
    }
  },
  Mutation: {
    // createQuestionnaire(){
    //   return prisma.questionnaire.create()
    // },
    createQuestion(parent, {questionTitle, questionnaireId}, ctx ){
      return ctx.prisma.question.create({
        data: {
          questionTitle,
          Questionnaire: {
            connect: { id: Number(questionnaireId) }
          }
        },
        
      })
    },
    createAnswer(parent, {description, isCorrect, questionId}, ctx) {
      return ctx.prisma.answer.create({
        data: {
          description,
          isCorrect,
          Question:{
            connect: {id: Number(questionId)}
          }
        }
      })
    }
  }
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ 
  schema,
  context: () => ({ prisma }) }).createHandler({
  path: '/api/graphql',
})