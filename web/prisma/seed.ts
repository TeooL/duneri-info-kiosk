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
  await prisma.spell.create({
    data: {
      name: "Firebolt",
      type: "Fire Arts",
      tier: 1,
      description: "A bolt of fire"
    }
  })
  await prisma.spell.create({
      data: {
        name: "Waterbolt",
        type: "Water Arts",
        tier: 1,
        description: "A bolt of water"
      }
  })
  await prisma.weaponTag.create({
    data: { name: "Reach", description: "Your weapon has +1 tile range" },
  })
  await prisma.weaponTag.create({
    data: { name: "Two-Handed", description: "Requires both hands to wield" },
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
