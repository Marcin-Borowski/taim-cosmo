import { json } from "@sveltejs/kit"
import { PrismaClient } from "@prisma/client"

export let GET = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    select: {
      title: true,
      slug: true,
      abstract: true
    },
    where: {
      active: true
    }
  })

  return json(posts)
}

export let POST = async ({ request }) => {

  const post = {};
  return {success: true, post}
}