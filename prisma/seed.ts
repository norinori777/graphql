import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  const user = await prisma.user.create({
    data: {
      userId: "880781",
      email: "norinori6791@gmail.com",
      avater: "data:@fowjfiowjfaijoijweoaofjweiofjweoifjaksvfldsnvjvhosahoi",
      password: "test",
    },
  });
  // const rooms = await prisma.room.findMany();
  // console.log(rooms);
};
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
