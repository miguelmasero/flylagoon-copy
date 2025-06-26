import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-cyan-100 font-[family-name:var(--font-geist-sans)] text-gray-800">
      {/* HERO SECTION */}
      <header className="relative h-[60vh] sm:h-[70vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500 opacity-80"></div>
        <div className="relative z-10 text-center p-6 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-md">
            Discover the Magic of the Maldives
          </h1>
          <p className="text-lg sm:text-2xl mb-6 drop-shadow-sm">
            Snorkelling & Sight-Seeing tours crafted for Airline Crew with tight
            layovers around Hulhumalé & North Malé Atoll.
          </p>
          <Link
            href="#book"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-colors"
          >
            Book Your Adventure
          </Link>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto" id="features">
        {[
          {
            title: "Flexible Schedules",
            description:
              "Tours depart multiple times per day so you can fit adventure between flights.",
            icon: "/window.svg",
          },
          {
            title: "All-Inclusive Price",
            description:
              "Everything you need: equipment, guiding, transfers & refreshments — no hidden fees.",
            icon: "/file.svg",
          },
          {
            title: "Stunning Media Package",
            description:
              "Go home with high-resolution photos & drone videos shot by our crew.",
            icon: "/vercel.svg",
          },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <Image src={item.icon} alt="" width={48} height={48} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 max-w-xs">{item.description}</p>
          </div>
        ))}
      </section>

      {/* TOUR HIGHLIGHTS SECTION */}
      <section className="bg-white py-16 px-6 sm:px-12" id="highlights">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              What You&rsquo;ll Experience
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Swim with curious sea turtles & colourful reef fish</li>
              <li>Dolphin spotting on crystal-blue waters</li>
              <li>Visit pristine sandbanks perfect for drone shots</li>
              <li>Guided by certified water-rescue professionals</li>
            </ul>
          </div>
          <Image
            src="/globe.svg"
            alt="Snorkelling in Maldives"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section
        id="book"
        className="py-16 px-6 sm:px-12 bg-emerald-600 text-white text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Ready for Take-off?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Tours start at just <span className="font-bold">USD&nbsp;65</span>. Reserve
          your spot now—pay on arrival. Free cancellation up to 12 hours before
          departure.
        </p>
        <a
          href="https://wa.me/9600000000?text=Hi%20FlyLagoon!%20I%20want%20to%20book%20a%20snorkel%20tour."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-emerald-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          Message Us on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm bg-gray-800 text-gray-300 mt-auto">
        © {new Date().getFullYear()} FlyLagoon Tours. All rights reserved.
      </footer>
    </div>
  );
}
