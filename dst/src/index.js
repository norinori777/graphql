"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const typeDefs = (0, apollo_server_1.gql) `
type Room {
  id: ID!
  insertAt: Date
  updateAt: Date
  name: String!
  description: String
}

type Query {
  rooms(): [Room]
  }
`;
const resolvers = {
    Query: {
        rooms: () => prisma.rooms.findMany(),
    },
};
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(` Server ready at ${url}`);
});
