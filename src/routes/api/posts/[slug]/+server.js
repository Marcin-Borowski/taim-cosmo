import { json } from "@sveltejs/kit"
import { PrismaClient } from "@prisma/client"

export let GET = async ({ params }) => {  
  const { slug } = params;

  const prisma = new PrismaClient();
  const posts = await prisma.post.findFirst({
    select: {
      title: true,
      slug: true,
      abstract: true
    },
    where: {
      slug: slug
    }
  })

  return json(posts)
}