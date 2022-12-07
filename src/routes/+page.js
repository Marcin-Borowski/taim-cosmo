import { APP_NAME, API_URL, API_TOKEN } from "$lib/utils/constants";
import axios from "axios";
import qs from 'qs';

export const load = async () => {
  const query = qs.stringify({
    populate: '*',
    fields: [
      'id', 'title', 'name', 'slug', 'body', 'date'
    ]
  })

  // const cos = await axios.get(`${API_URL}/api/posts?${query}`, {
  //   headers: {
  //     "Authorization": `Bearer ${API_TOKEN}`
  //   }
  // })

  // const posts = cos.data.data.map((item) => {
  //   return {
  //     id: item.id,
  //     name: item.attributes.name,
  //     slug: item.attributes.slug,
  //     title: item.attributes.title,
  //     body: item.attributes.body,
  //     date: item.attributes.date,
  //     image: {
  //       thumbnail: item.attributes.thumbnail.data.attributes.formats.thumbnail?.url,
  //       small: item.attributes.thumbnail.data.attributes.formats.small?.url,
  //       medium: item.attributes.thumbnail.data.attributes.formats.medium?.url,
  //       original: item.attributes.thumbnail.data.attributes?.url,
  //     }
  //   }
  // })

  // console.log(posts);


  return {
    pageTitle: `Super Fajne ${APP_NAME}`,
    posts: []
  }
}