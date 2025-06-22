import Image from "next/image";
import Head from "next/head";
import Hero from "@/public/hero.jpg";
import Electra from "@/public/electra.jpg";
import Shuttle from "@/public/shuttle.jpg";
import Starbase from "@/public/starbase.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="title" content="Nomadtrac" key="title" />
        <meta
          name="description"
          content="Self-driving travel campers that let you live anywhere you want"
          key="description"
        />
        <meta property="og:title" content="Nomadtrac" key="ogtitle" />
        <link rel="icon" href="/favicon.ico?v=1" /> {/* force new version */}
        <meta
          property="og:description"
          content="Self-driving travel campers that let you live anywhere you want"
          key="ogdescription"
        />
      </Head>
      <div>
        <h1>Introducing Nomadtrac</h1>
        <h2>The First Self-Driving Camper</h2>
        <h3>Because the Planet is Your Home</h3>
      </div>

      <div className="heroDiv">
        <Image priority src={Hero} fill alt="camper under the stars" />
      </div>

      <h2>A Model For Every Lifestyle</h2>

      <div className="thumbnailDiv">
        <Image src={Shuttle} fill alt="shuttle" />
        <h3>Shuttle</h3>
      </div>

      <div className="thumbnailDiv">
        <Image src={Electra} fill alt="electra" />
        <h3>Electra</h3>
      </div>

      <div className="thumbnailDiv">
        <Image src={Starbase} fill alt="starbase" />
        <h3>Starbase</h3>
      </div>

      <div className="footer">
        <hr />
        <p>Copyrights (C) 2025 Nomadtrac, Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
}
