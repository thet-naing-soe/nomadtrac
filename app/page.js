import Image from "next/image";
import Link from "next/link";
import Hero from "@/public/hero.jpg";
import Electra from "@/public/electra.jpg";
import Shuttle from "@/public/shuttle.jpg";
import Starbase from "@/public/starbase.jpg";

export default function Home() {
  return (
    <>
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
        <Link href="/shuttle" className="navLink">
          <Image src={Shuttle} fill alt="shuttle" />
          <h3>Shuttle</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Image src={Electra} fill alt="electra" />
        <h3>Electra</h3>
      </div>

      <div className="thumbnailDiv">
        <Image src={Starbase} fill alt="starbase" />
        <h3>Starbase</h3>
      </div>
    </>
  );
}
