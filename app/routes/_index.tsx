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
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.poc1_posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.uri}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div >
  );
}
