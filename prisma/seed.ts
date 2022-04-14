import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
 

  await prisma.blog.create({
    data: {
      title: "My first blog",
      body: "Test out this blog",
      
    },
  });

  await prisma.blog.create({
    data: {
      title: "My second blog",
      body: "Hello, world!",
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
