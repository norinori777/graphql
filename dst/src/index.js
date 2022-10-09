"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const typeDefs = (0, apollo_server_1.gql) `
  type Query {
    room(id: ID): Room
    rooms: [Room!]!
  }

  type Mutation {
    registerUser(input: registerUserInput): User
  }

  input registerUserInput {
    userid: String
    email: String
    avater: String
    password: String
  }

  type Query {
    post(id: ID): Post
    posts(roomId: ID): [Post]
  }

  type Post {
    id: ID!
    insertAt: String!
    updateAt: String!
    roomId: ID
    message: String
    author: String
  }

  type Room {
    id: ID!
    insertAt: String!
    updateAt: String!
    name: String!
    description: String!
  }

  type User {
    id: ID!
    insertAt: String!
    updateAt: String!
    userId: String
    email: String
    avater: String
    password: String
  }
`;
const resolvers = {
    Query: {
        rooms: () => prisma.room.findMany(),
    },
    Mutation: {
        registerUser: (parent, args, context, info) => {
            prisma.user.create({
                data: {
                    userId: args.userId,
                    email: args.email,
                    avater: args.avater,
                },
            });
        },
    },
};
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(` Server ready at ${url}`);
});
