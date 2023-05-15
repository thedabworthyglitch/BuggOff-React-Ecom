import Head from "next/head";
import Header from "../components/Header";
import Register from "../components/register";


export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Bugg Off</title>
        
      </Head>

      
      <Header />

      <main className="max-w-screen-2xl mx-auto" >
        <Register />
      </main>
    </div>
  );
}
