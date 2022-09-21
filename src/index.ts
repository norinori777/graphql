import { ApolloServer, gql } from "apollo-server";
import { Resolvers } from "./generated/graphql";
const typeDefs = gql`
  type Query {
    hello(name: String!): String
  }
`;
const resolvers: Resolvers = {
  Query: {
    hello: (parent, args) => {
      console.log("name:" + args.name);
      return "Hello World " + args.name;
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(` Server ready at ${url}`);
});
