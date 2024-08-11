'use server';
import { MDXContent } from "@/components/mdx-components";
import "@/styles/mdx.css";
import { Tag } from "@/components/tag";

interface Post {
  title: string;
  tags?: string[]; // make this optional
  description?: string;
  body: string;
}

interface PostPageProps {
  post: Post;
}

export default async function PostPage({post}:PostPageProps) {
 
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag:string) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
