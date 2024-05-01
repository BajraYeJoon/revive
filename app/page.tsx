import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Materials from "./sections/Materials/Materials";
import Metrics from "./sections/Metrics/Metrics";
import Products from "./sections/Products/Products";
import Cta from "./sections/Cta/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Materials />
      <Metrics />
      <Products />
      <Cta />
    </main>
  );
}
