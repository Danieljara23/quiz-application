import { ApolloServer} from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'
import { schema } from "../../apollo/schema";

const prisma = new PrismaClient()

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