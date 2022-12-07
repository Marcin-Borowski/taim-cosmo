import { PrismaClient } from "@prisma/client"


export const load = async () => {

  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany({
    select: {
      title: true,
      abstract: true
    },
    where: {
      active: true
    }
  })

  const authors = await prisma.user.findMany()

  return {
    posts,
    authors
  }
}


export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    
    const title = data.get('title');
    const abstract = data.get('abstract');
    const content = data.get('content');
    const date = data.get('date');
    const author_id = data.get('date')?.id;
    
    // const prisma = new PrismaClient();
    // const result = await prisma.post.create({
    //   title,
    //   abstract,
    //   content,
    //   date,
    //   author_id
    // })

    console.log(title)
    return { success: true }
  }
}