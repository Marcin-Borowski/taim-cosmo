import { PrismaClient } from "@prisma/client"
import slugify from "slugify";


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

    console.log(data);

    const title = data.get('title');
    const slug = slugify(title, { lower: true, locale: 'pl' })
    const abstract = data.get('abstract');
    const content = data.get('content');
    const date = new Date(data.get('date'));
    const author_id = parseInt(data.get('author_id'));

    const prisma = new PrismaClient();
    const result = await prisma.post.create({
      data: {
        title,
        slug,
        abstract,
        content,
        date,
        active: true,
        author_id
      }
    })

    if (result) {
      return { success: true, post: result }
    } else {
      return { success: false }
    }

  }
}