import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { CommentsProvider } from "@/services/commentsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CommentsProvider>
        <Component {...pageProps} />
      </CommentsProvider>
    </ThemeProvider>
  );
}
