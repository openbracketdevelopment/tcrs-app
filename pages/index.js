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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <h1 className="hidden sm:block mb-4 text-3xl">
                Tam's Commercial & Residential Services
              </h1>
              <div className="text-center sm:text-left">
                <p className="description mb-4">
                  Welcome to our website! Please bear with us as we make
                  improvements. Exciting changes are on the way!
                </p>

                <p className="description mb-4">
                  For immediate assistance, feel free to reach out to us at:
                </p>
                <p className="description mb-4">
                  <a className="font-bold" href="tel:817-823-8009">
                    817-823-8009
                  </a>{" "}
                  <br />
                  or <br />
                  <a
                    className="font-bold"
                    href="mailto:elite_works@hotmail.com,phamt@live.com"
                  >
                    Email us!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
