// import { PrismaClient } from "@prisma/client";
// import { RegisterUserInput, ResolverFn, User } from "../generated/graphql";
// const prisma = new PrismaClient();

// export const registerUser: MutationResolvers["registerUser"] = async (
//   parent,
//   args,
//   context,
//   info
// ) => {
//   const user = await prisma.user.create({
//     data: {
//       userid: args.input?.userid,
//       email: args.input?.email,
//       avater: args.input?.avater,
//       password: args.input?.password,
//     },
//   });
//   return user;
// };

// export const registerUser: ResolverFn<User, {}, {}, RegisterUserInput> = async (
//   parent,
//   args,
//   context,
//   info
// ) => {
//   const user = await prisma.user.create({
//     data: {
//       userid: args.userid,
//       email: args.email,
//       avater: args.avater,
//       password: args.password,
//     },
//   });
//   return user;
// };
