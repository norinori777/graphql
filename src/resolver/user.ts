import { PrismaClient } from "@prisma/client";
import { Resolver } from "../generated/graphql";

export const resolvers = {
  Query: {
    auth: async (_: any, { input }: any) => {
      const prisma = new PrismaClient();
      const { userId, password } = input;
      const count = await prisma.user.count({
        where: { userId: userId, password: password },
      });
      const result = count === 1;
      return { result: result };
    },
  },
  Mutation: {
    registerUser: async (_: any, { input }: any) => {
      const prisma = new PrismaClient();
      const { userId, email, avater, password } = input;
      const user = prisma.user.create({
        data: {
          userId: userId,
          email: email,
          avater: avater,
          password: password,
        },
      });
      return user;
    },
  },
};
