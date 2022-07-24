import Head from "next/head";
import React from "react";
import Seo from "../compoents/Seo";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <NavBar />
      <div>{children}</div>
    </>
  );
}
