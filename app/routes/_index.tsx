import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { PostsQuery } from "~/graphql/generated";
import { getPosts } from "~/services/posts.service";

export const meta: MetaFunction = () => {
  return [
    { title: "Posts" },
    { name: "description", content: "Welcome to POC Blog!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const posts = await getPosts()
  return { posts }
}

export default function Index() {
  const { posts } = useLoaderData<{
    posts: PostsQuery
  }>()

  return (
    <div className="flex justify-center m-4 flex-col">
      <h1 className="text-3xl font-bold text-center m-4">
        Posts
      </h1>
      <ul className="list-none">
        {posts.poc1_posts.map((post) => (
          <li key={post.id} className="text-center">
            <a href={`/posts/${post.uri}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}