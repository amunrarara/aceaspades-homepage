import Typed from "typed.js";
import "./App.css";
import { useEffect, useRef } from "react";
import LightningWidget from "./LightningWidget";

function App() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Sovereign Scribe",
        "Creative Engineer",
        "Storyteller",
        "Fantasy Writer",
        "Creator of Gondōlla: A Galactic Spiritual Mythology",
        "Coffee Roaster",
        "Father + Husband",
        "Digital Home-ad",
        "JRR Tolkien Super-Nerd",
      ],
      typeSpeed: 60,
      loop: true,
      cursorChar: "_",
      fadeOut: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-black/50 w-full h-full p-8 lg:p-16">
      <nav className="">
        <img
          src="/images/asb-logo-white.png"
          alt="acea spades logo"
          className="w-[75px] h-[75px] ml-auto opacity-50 hover:opacity-100 transition duration-300 ease-in-out"
        />
      </nav>
      <img
        src="/images/acea-profile.png"
        alt="acea spades"
        className="w-[200px] h-[200px] rounded-full mx-auto"
      />
      <h1 className="lg:text-[5rem] mt-auto font-black">ACEA SPADES</h1>
      <div className="min-h-40 flex justify-center items-center">
        <span
          ref={typedRef}
          className="typed text-[#ffb700] font-black h3 text-left"
        ></span>
      </div>
      <section className="flex flex-col gap-4 mt-8">
        <button
          className="hover:scale-[101%] transition duration-300 ease-in-out"
          onClick={() => {
            window.open("https://sundragon.tech", "_blank");
          }}
        >
          Hire me @ <b>sundragon.tech</b>
        </button>
        <button
          className="hover:scale-[101%] transition duration-300 ease-in-out"
          onClick={() => {
            window.open("https://sundragon.coffee", "_blank");
          }}
        >
          Buy fresh-roasted coffee at <b>Sundragon Coffee</b>
        </button>
        <button
          className="hover:scale-[101%] transition duration-300 ease-in-out"
          onClick={() => {
            window.open(
              "https://njump.me/npub1xzrkzsrnr83vn7h0udq6tnapwpswy5equlrtkn3nu0e0anlmzynqne0qap",
              "_blank"
            );
          }}
        >
          Visit my <b>Nostr</b> profile via Njump
        </button>
        <button
          className="hover:scale-[101%] transition duration-300 ease-in-out"
          onClick={() => {
            window.open(
              "https://publish.obsidian.md/gondolla/Welcome+to+Gond%C5%8Dlla",
              "_blank"
            );
          }}
        >
          Read <b>Gondōlla</b>: A Galactic Spiritual Mythology
        </button>
        <button
          className="hover:scale-[101%] transition duration-300 ease-in-out"
          onClick={() => {
            window.open("https://github.com/amunrarara", "_blank");
          }}
        >
          Check out my <b>GitHub</b> profile
        </button>
        <button
          className="hover:scale-[101%] transition duration-300 ease-in-out"
          onClick={() => {
            window.open("https://linkedin.com/in/aceaspades", "_blank");
          }}
        >
          Connect on <b>LinkedIn</b>
        </button>
        <LightningWidget
          name="⚡️ Zap Sats to Acea Spades ⚡️ "
          accent="#121212"
          to="aceaspades@vlt.ge"
          image=""
          amounts="100, 1000, 10000"
          labels=""
        />
      </section>
    </section>
  );
}

export default App;
