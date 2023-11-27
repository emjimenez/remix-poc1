import { sdk } from "app/utils/api.server";

const headers = {
  "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET || ""
};

export async function getPosts() {
  const posts = await sdk.posts({}, headers);
  return posts
}

export async function getPost(uri: string) {
  const posts = await sdk.posts_by_uri({ uri: uri }, headers);
  return posts
}