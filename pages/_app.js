import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Notesapp</title>
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  );
}
