"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
const client_1 = require("@prisma/client");
const rooms = async () => {
    return await client_1.prisma.room.findMany();
};
exports.rooms = rooms;
