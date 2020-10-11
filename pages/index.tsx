import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">Coming soon | purplecherrypixels</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
        <img src="img/cherry.png" className="h-32 m-8" />
        <h1 className="font-mono text-2xl text-white">Coming soon</h1>
      </div>
    </>
  );
}
