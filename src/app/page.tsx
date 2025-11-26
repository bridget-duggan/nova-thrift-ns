import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/Nova-Thrift-Logo.png";
import "./../styles/global.css"
import "./../styles/home.css"

export default function Home() {
  return (
    <main className="p-8 home">
      <div className="header">
        <Image src={logo} alt="Nova Thrift logo" className="mt-4 logo" />
        <div className="header-text-container">
          <h1 className="text-3xl font-bold">Nova Thrift NS</h1>
          <h2>Find good deals. Support good causes.</h2>
        </div>
        <div className="header-media-links">

        </div>
      </div>
      <div className="map-feature">
        <h1>Explore thrift stores across Nova Scotia supporting causes you care about.</h1>
        <Link href="/stores"><p>view our interactive store map</p></Link>
      </div>
      <div className="learn-about-fast-fashion">
        <h1>What do you know about fast fashion?</h1>
        <Link href="/fashion"><p>Learn More</p></Link>
      </div>
      <div className="submit-your-location">
        <h1>Don't see a thrift store on our map?</h1>
        <Link href="/submit"><p>Submit Here</p></Link>
      </div>
    </main>
  );
}

