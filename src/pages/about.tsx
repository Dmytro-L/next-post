import { FC } from "react";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/DarkMode.module.scss";

const AboutPage: FC = () => {
  return (
    <div className={styles.main} suppressHydrationWarning>
      <Layout>
        <div className={styles.about}>Something about Blog!!!!</div>
      </Layout>
    </div>
  );
};

export default AboutPage;
