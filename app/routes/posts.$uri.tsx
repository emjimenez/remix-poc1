import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
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
    <div className="flex flex-col items-center m-4">
      <header className="w-full p-4">
        <Link to="/" className="font-bold">Home</Link>
      </header>
      <h1 className="text-3xl font-bold text-center m-4">
        {post.title}
      </h1>
      <div className="prose max-w-none">
        {post.body}
      </div>
    </div >
  );
}
