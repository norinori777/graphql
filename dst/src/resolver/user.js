"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const client_1 = require("@prisma/client");
const registerUser = async (parent, args, context, info) => {
    const user = await client_1.prisma.user.create({
        data: {
            userid: args.input?.userid,
            email: args.input?.email,
            avater: args.input?.avater,
            password: args.input?.password,
        },
    });
    return user;
};
exports.registerUser = registerUser;
