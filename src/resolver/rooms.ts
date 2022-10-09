import { PrismaClient, Room } from "@prisma/client";
import { QueryRenderer } from "react-relay";
import {
  QueryResolvers,
  ResolverTypeWrapper,
  Resolvers,
} from "../generated/graphql";

// export const rooms: ResolverTypeWrapper<() => Promise<Room[]>> = async () => {
//   const allRooms = prisma.room.findMany();
//   return allRooms;
// };

// export const rooms: QueryResolvers["rooms"] = async () => {
//   const allRooms = prisma.room.findMany();
//   return allRooms;
// };

const resolvers: Resolvers = {
  Query: {
    rooms: async (parent, args, context, info) => {
      return context.prisma.room.findMany();
    },
  },
};
