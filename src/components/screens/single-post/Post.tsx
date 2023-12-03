import Layout from "@/components/layout/Layout";
import { IPostSingleData } from "@/interfaces/post.interface";
import PostItem from "@/ui/post/PostItem";
import { FC } from "react";

const SinglePost: FC<IPostSingleData> = ({ post }) => {
  return (
    <Layout>
      <PostItem post={post} />
    </Layout>
  );
};
export default SinglePost;
