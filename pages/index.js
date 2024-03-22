import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Tam's Commercial & Residential Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="grid justify-center items-center">
            <h1 className="block text-center text-3xl sm:hidden mb-8">
              Tam's Commercial & Residential Services
            </h1>
            <img
              className="w-full max-w-[260px] sm:max-w-[320px] grid justify-self-center"
              src="/assets/images/tcrs_logo.webp"
              alt="Tam's Commercial & Residential Services"
            />
          </div>
          <div className="max-w-[480px] grid justify-center items-center">
            <div className="relative">
              <h1 className="hidden sm:block mb-10 text-3xl">
                Tam's Commercial & Residential Services
              </h1>
              <div className="text-center sm:text-left">
                <p className="description mb-4">
                  Welcome to our website! Please bear with us as we make
                  improvements. Exciting changes are on the way!
                </p>

                <p className="description mb-4">
                  For immediate assistance or if there are any questions you
                  might have, feel free to reach out and
                </p>
                <p className="description my-10 flex items-center">
                  <a
                    className="font-bold bg-[#ed2227] text-white px-6 py-2 rounded-[2rem] uppercase"
                    href="tel:817-823-8009"
                  >
                    Give Us A Call
                  </a>
                  <span className="mx-4">or</span>
                  <a
                    className="font-bold bg-[#87371c] text-white px-6 py-2 rounded-[2rem] uppercase"
                    href="mailto:elite_works@hotmail.com,phamt@live.com"
                  >
                    Email
                  </a>
                </p>
                <a className="font-bold" href="tel:817-823-8009">
                  817-823-8009
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-10"></hr>
        <div className="grid bg-gradient-to-b from-[#3197ca] to-[#10519a] text-white p-12 rounded-[3rem]">
          <h2 className="font-bold text-left mb-10 text-2xl">
            Services We Offer
          </h2>
          <ul>
            <li>General Air Conditioning Service</li>
            <li>General Heating and Heat Pump Service</li>
            <li>Freon Leveling and Charge</li>
            <li>AC and Furnace Installation</li>
            <li>Duct Installation</li>
            <li>Coil and Condensing Clean up</li>
            <li>General Electrical Service</li>
            <li>Electrical Fault Testing & Check Up</li>
            <li>Electrical Rewiring</li>
            <li>Electrical Panel Installs</li>
            <li>Light fixtures and plugs</li>
            <li>General Plumbing Services</li>
            <li>Slab Leaks</li>
            <li>Replumbing and Repiping</li>
            <li>Water Heater Installs</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
