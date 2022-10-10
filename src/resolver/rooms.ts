import { PrismaClient, Room } from "@prisma/client";
import { Resolvers } from "../generated/graphql";

export const resolvers = {
  Query: {
    rooms: async () => {
      const prisma = new PrismaClient();
      return prisma.room.findMany();
    },
  },
};
