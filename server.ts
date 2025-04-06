// server.js (Node.js backend)
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    prisma,
  }),
});

server.listen(4000).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
