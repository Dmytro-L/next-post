import { FC } from "react";
import Link from "next/link";
import styles from "./HeaderComponent.module.scss";
import { useTheme } from "next-themes";

const HeaderComponent: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about" as="/about">About</Link>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")} suppressHydrationWarning>
          Dark
        </button>
      ) : (
        <button onClick={() => setTheme("light")} suppressHydrationWarning>
          Light
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
