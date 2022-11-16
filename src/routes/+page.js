import { APP_NAME } from "$lib/utils/constants";

export const load = async ({fetch}) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  return {
    pageTitle: `Super Fajne ${APP_NAME}`,
    posts: data.filter((item) => item.id < 10)
  }
}