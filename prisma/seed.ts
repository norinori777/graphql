import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  const count = await prisma.user.count({
    where: {
      userId: "880781",
      password: "test",
    },
  });
  console.log(count);
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
