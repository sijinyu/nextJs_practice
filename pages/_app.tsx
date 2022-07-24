import React from "react";
import "../styles/globals.css";
import Layout from "./Layout";

interface AppProp {
  Component: any;
  pageProps: React.PropsWithChildren;
}
export default function App({ Component, pageProps }: AppProp) {
  console.log("ap");
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
