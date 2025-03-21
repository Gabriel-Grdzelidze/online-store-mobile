import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const products = await prisma.product.findMany();
      const formattedProducts = products.map(product => ({
        ...product,
        id: product.id.toString()
      }));
      res.status(200).json(formattedProducts); 
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

