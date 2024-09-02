import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q") || "";

  const produts = await prisma.product.findMany({
    // Строгое сравнение по имени
    // where: {
    // 	name: query
    // },

    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return NextResponse.json(produts);
}
