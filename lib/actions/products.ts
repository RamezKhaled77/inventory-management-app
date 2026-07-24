"use server";

import { redirect } from "next/navigation";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";
import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().nonnegative("Price must be non-negative"),
  quantity: z.coerce.number().int().min(0, "Quantity must be non-negative"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const userId = user.id;
  const productId = String(formData.get("id") || "");

  await prisma.product.deleteMany({
    where: { id: productId, userId },
  });
}

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();

  const parsed = productSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });

  if (!parsed.success) throw new Error("Validation failed!!");

  try {
    await prisma.product.create({
      data: { ...parsed.data, userId: user.id },
    });
    redirect("/inventory");
  } catch (error) {
    throw new Error("Failed to create product.");
  }
}
