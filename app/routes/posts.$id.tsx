import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Posts_By_IdQuery } from "~/graphql/generated";
import { getPost } from "~/services/posts.service";

export async function loader({
    params,
  }: LoaderFunctionArgs) {
  const post = await getPost(Number(params.id))
  return { post }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.post.poc1_posts_by_pk?.title },
    { name: "description", content: "Welcome to POC Blog!" },
  ];
};


export default function Index() {
  const { post } = useLoaderData<{
    post: Posts_By_IdQuery
  }>()

  return (
    <div>
      <h1>{post.poc1_posts_by_pk?.title}</h1>
      <div>
        {post.poc1_posts_by_pk?.body}
      </div>
    </div >
  );
}
