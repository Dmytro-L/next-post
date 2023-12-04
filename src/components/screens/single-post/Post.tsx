import Layout from "@/components/layout/Layout";
import { IPostSingleData } from "@/interfaces/post.interface";
import PostItem from "@/ui/post/PostItem";
import { FC } from "react";
import styles from "@/styles/DarkMode.module.scss";

const SinglePost: FC<IPostSingleData> = ({ post }) => {
  return (
    <div className={`${styles.main} ${styles.postSingle}`}>
      <Layout>
        <PostItem post={post} />
      </Layout>
    </div>
  );
};
export default SinglePost;
