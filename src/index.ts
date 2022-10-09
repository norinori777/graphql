import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { loadFiles } from "@graphql-tools/load-files";

const prisma = new PrismaClient();

const startServer = async () => {
  const typeDefs = await loadFiles("./src/schema/**/*.graphql");
  const resolvers = await loadFiles("./src/resolver/**/*.ts");

  const server = new ApolloServer({ typeDefs, resolvers, context: { prisma } });
  server.listen().then(({ url }) => {
    console.log(` Server ready at ${url}`);
  });
};

startServer();
