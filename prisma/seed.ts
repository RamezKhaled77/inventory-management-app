import "dotenv/config";
import { PrismaClient } from "./generated-client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  const demoUserId = "ef0361f1-4798-4e3c-ab4d-63be66686924";

  await prisma.product.deleteMany({});

  // Create 25 sample products for the demo user
  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      name: `Product - ${i + 1}`,
      price: parseFloat((Math.random() * 90 + 10).toFixed(2)),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      userId: demoUserId,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });

  console.log("=========================================");
  console.log("✅ Seed data created successfully.");
  console.log(`🚀 Created 25 sample products for user ID: ${demoUserId}`);
  console.log("=========================================");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
