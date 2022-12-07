import { json } from "@sveltejs/kit"


export let GET = async ({ params, request }) => {
  
  console.log(params)
  console.log(request)

  return json({tekst: "ala ma sluga"})
}