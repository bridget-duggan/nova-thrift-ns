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
        <div className="fast-fashion-text-box">
          <p>
            An article published in 2020 by Niinimäki, K., Peters, G., Dahlbo, H. et al. states numerous
            dangers of the mass and rushed production of clothes, but highlights these:
          </p>
          <ul>
            <li>Extensive fabric waste disposed of in developing countries</li>
            <li>Exposure to harmful chemicals at all stages of the supply chain</li>
            <li>Enviromental impact on our water and energy</li>
          </ul>
          <p>
            Niinimäki, K., Peters, G., Dahlbo, H. et al. The environmental price of fast fashion. Nat Rev Earth Environ 1,
             189–200 (2020). <Link href="https://doi.org/10.1038/s43017-020-0039-9"></Link>
          </p>
        </div>
        <Link href="/fashion"><p>Learn More Here</p></Link>
      </div>
      <div className="submit-your-location">
        <h1>Don't see a thrift store on our map?</h1>
        <div>
          <Link href="/submit"><p>Submit A Store</p></Link>
        </div>
      </div>
    </main>
  );
}

