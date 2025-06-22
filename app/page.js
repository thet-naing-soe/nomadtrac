import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/public/hero.jpg";
import ElectraImg from "@/public/electra.jpg";
import ShuttleImg from "@/public/shuttle.jpg";
import StarbaseImg from "@/public/starbase.jpg";

export default function Home() {
  return (
    <>
      <div>
        <h2>The First Self-Driving Camper</h2>
        <h3>Because the Planet is Your Home</h3>
      </div>

      <div className="heroDiv">
        <Image priority src={HeroImg} fill alt="camper under the stars" />
      </div>

      <h2>A Model For Every Lifestyle</h2>

      <div className="thumbnailDiv">
        <Link href="/shuttle" className="navLink">
          <Image src={ShuttleImg} fill alt="shuttle" />
          <br />
          <h3>Shuttle</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link href="/electra" className="navLink">
          <Image src={ElectraImg} fill alt="electra" />
          <br />
          <h3>Electra</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link href="/starbase" className="navLink">
          <Image src={StarbaseImg} fill alt="starbase" />
          <br />
          <h3>Starbase</h3>
        </Link>
      </div>
    </>
  );
}
