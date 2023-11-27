import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Poc1_Posts } from "~/graphql/generated";
import { getPost } from "~/services/posts.service";

export async function loader({
    params,
  }: LoaderFunctionArgs) {
  const posts = await getPost(params.uri || "")
  return { post: posts.poc1_posts[0] }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.post.title },
    { name: "description", content: "Welcome to POC Blog!" },
  ];
};


export default function Index() {
  const { post } = useLoaderData<{
    post: Poc1_Posts
  }>()

  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        {post.body}
      </div>
    </div >
  );
}
