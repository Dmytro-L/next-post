import { IPostSingleData } from "@/interfaces/post.interface";
import { FC } from "react";
import Link from "next/link";
import styles from "./PostItem.module.scss";
import { useRouter } from "next/router";
import PostComponent from "./PostComponent";

const PostItem: FC<IPostSingleData> = ({ post }) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {pathname === "/" ? (
        <Link href={`/post/${post.id}`}>Read more</Link>
      ) : (
        <>
          <Link href={`/`}>Back</Link>
          <PostComponent postId={post.id} />
        </>
      )}
    </div>
  );
};

export default PostItem;
