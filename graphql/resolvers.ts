import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


export function Context() {
  return {
    prisma,  
  };
}

const resolvers = {
  Query: {
    products: async (parent: any, args: any, context: { prisma: { product: { findMany: () => any; }; }; }) => {
      return await context.prisma.product.findMany();
    },
    product: async (parent: any, args: { id: any; }, context: { prisma: { product: { findUnique: (arg0: { where: { id: any; }; }) => any; }; }; }) => {
      return await context.prisma.product.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    users: async (parent: any, args: any, context: { prisma: { user: { findMany: () => any; }; }; }) => {
      return await context.prisma.user.findMany();
    },
  },
  Mutation: {
    addProduct: async (parent: any, args: { title: any; description: any; price: any; mainImg: any; img1: any; img2: any; category: any; }, context: { prisma: { product: { create: (arg0: { data: { title: any; description: any; price: any; mainImg: any; img1: any; img2: any; category: any; }; }) => any; }; }; }) => {
      return await context.prisma.product.create({
        data: {
          title: args.title,
          description: args.description,
          price: args.price,
          mainImg: args.mainImg,
          img1: args.img1,
          img2: args.img2,
          category: args.category,
        },
      });
    },
    deleteProduct: async (parent: any, args: { id: any; }, context: { prisma: { product: { delete: (arg0: { where: { id: any; }; }) => any; }; }; }) => {
      return await context.prisma.product.delete({
        where: {
          id: args.id,
        },
      });
    },
    updateProduct: async (parent: any, args: { id: any; title: any; description: any; price: any; mainImg: any; img1: any; img2: any; category: any; }, context: { prisma: { product: { update: (arg0: { where: { id: any; }; data: { title: any; description: any; price: any; mainImg: any; img1: any; img2: any; category: any; }; }) => any; }; }; }) => {
      return await context.prisma.product.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          description: args.description,
          price: args.price,
          mainImg: args.mainImg,
          img1: args.img1,
          img2: args.img2,
          category: args.category,
        },
      });
    },
    addUser: async (parent: any, args: { name: any; email: any; password: any; }, context: { prisma: { user: { create: (arg0: { data: { name: any; email: any; password: any; }; }) => any; }; }; }) => {
      return await context.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });
    },
    deleteUser: async (parent: any, args: { id: any; }, context: { prisma: { user: { delete: (arg0: { where: { id: any; }; }) => any; }; }; }) => {
      return await context.prisma.user.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default resolvers;
