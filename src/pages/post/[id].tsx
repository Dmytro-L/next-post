import { IPostSingleData } from "@/interfaces/post.interface";
import SinglePost from "@/components/screens/single-post/Post";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostService } from "@/services/post.service";
import { ParsedUrlQuery } from "querystring";

const PostPage: NextPage<IPostSingleData> = ({ post }) => {
  return <SinglePost post={post} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await PostService.getAll();
  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps<IPostSingleData> = async ({
  params,
}) => {
  const post = await PostService.getSinglePost(String(params?.id));
  return {
    props: { post },
    revalidate: 60,
  };
};

export default PostPage;
