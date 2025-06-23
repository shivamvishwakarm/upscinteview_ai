import DAFForm from "./components/form";
import Hero from "./components/HomePage";
import HowItWorks from "./components/HowItsWork";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <DAFForm />
    </div>
  );
}
