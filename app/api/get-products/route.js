import { PrismaClient } from "@prisma/client";
export async function GET(res) {
    const prisma = new PrismaClient()
    try{
        const products = await prisma.product.findMany()
       return res.status(200).json(products)
    }catch(error){
        console.log(error)
    }
}

