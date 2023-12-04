import Home from "@/components/screens/home/Home";
import { IPostData } from "@/interfaces/post.interface";
import { PostService } from "@/services/post.service";
import { GetStaticProps, NextPage } from "next";
import Head from 'next/head';


const HomePage: NextPage<IPostData> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="description" />
        <meta name="keywords" content="keywords" />
      </Head>
      <Home posts={posts} />
    </>
  )
};

export const getStaticProps: GetStaticProps<IPostData> = async () => {
  const posts = await PostService.getAll();

  return {
    props: { posts },
    revalidate: 60,
  };
};
export default HomePage;
