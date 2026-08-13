import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.race.create({
    data: {
      name: "Human",
      description: "Versatile and adaptable, humans are found everywhere in Duneri.",
    },
  });
  await prisma.item.create({
    data: {
      name: "Longsword",
      type: "Weapon",
      description: "A starting item for the warrior class"
    }
  });
  await prisma.loreEntry.create({
    data: {
      title: "First Fight",
      body: "This was the party's first fight, they encountered some bandits and successfully defended against them" 
    }
  })

  console.log("Seed data created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
