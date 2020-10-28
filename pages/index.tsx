import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">Coming soon | purplecherrypixels</title>
      </Head>
      <div className="font-sans bg-gray-900">
        <div className="flex flex-col items-center justify-between min-h-screen">
          <Header />
          <Team />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
