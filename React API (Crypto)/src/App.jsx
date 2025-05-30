import { useEffect } from "react";
import { gsap } from "gsap";

import Hero from "./Commpornent/hero"
import Trend from "./Commpornent/trend"
import Markets from "./Commpornent/market"
import News from "./Commpornent/news"


function App() {



  useEffect(() => {
    gsap.from("article", { opacity: 0, 
      duration: 1, 
      y: -50 });
  }, []);

  return (
    <>
      <main>
        <article>
          <Hero />
          <Trend />
          <Markets />
          <News />
        </article>
      </main>
    </>
  );
}

export default App
