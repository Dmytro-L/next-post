import { FC } from "react";
import styles from "@/styles/DarkMode.module.scss";
import Layout from "@/components/layout/Layout";
import { IPostData } from "@/interfaces/post.interface";
import PostItem from "@/ui/post/PostItem";

const Home: FC<IPostData> = ({ posts }) => {
  return (
    <div className={styles.main}>
      <Layout>
        <h2>Posts</h2>

        {posts.length ? (
          posts.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <div>empty</div>
        )}
      </Layout>
    </div>
  );
};

export default Home;
