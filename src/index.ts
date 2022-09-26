import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = gql`
  type Query {
    room(id: ID): Room
    rooms: [Room!]!
  }

  type Room {
    id: ID!
    insertAt: String!
    updateAt: String!
    name: String!
    description: String!
  }
`;

const resolvers = {
  Query: {
    rooms: () => prisma.room.findMany(),
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(` Server ready at ${url}`);
});
