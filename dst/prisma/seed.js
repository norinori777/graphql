"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const main = async () => {
    const user = await prisma.user.create({
        data: {
            userId: "880781",
            email: "norinori6791@gmail.com",
            avater: "data:@fowjfiowjfaijoijweoaofjweiofjweoifjaksvfldsnvjvhosahoi",
        },
    });
};
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
