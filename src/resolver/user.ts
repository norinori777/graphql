import { PrismaClient } from "@prisma/client";
import { Resolver } from "../generated/graphql";

export const resolvers = {
  Mutation: {
    registerUser: async (_: any, { input }: any) => {
      const prisma = new PrismaClient();
      const { userid, email, avater, password } = input;
      const user = prisma.user.create({
        data: {
          userId: userid,
          email: email,
          avater: avater,
          password: password,
        },
      });
      return user;
    },
  },
};
