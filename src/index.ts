import { ApolloServer, gql } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import { loadFiles } from "@graphql-tools/load-files";
import express from "express";
import { test } from "./middleware/types/test";
import { test2 } from "./middleware/types/test2";

const prisma = new PrismaClient();

const startServer = async () => {
  const typeDefs = await loadFiles("./src/schema/**/*.graphql");
  const resolvers = await loadFiles("./src/resolver/**/*.ts");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ res, req }) => ({ res, req }),
  });

  const app: express.Express = await express();
  app.use(test);
  await server.start();
  await server.applyMiddleware({ app });

  await app.listen({ port: 4000 }, () => {
    console.log(` Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
