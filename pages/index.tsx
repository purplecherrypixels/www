import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">Coming soon | purplecherrypixels</title>
      </Head>
      <div className="font-sans bg-gray-900">
        <div className="flex flex-col items-center justify-between min-h-screen">
          <Header />
          <div>
            <img src="img/cherry.png" className="h-32 m-8" />
            <h1 className="font-mono text-2xl text-white">Coming soon</h1>
          </div>
          <Team />
          <div></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
