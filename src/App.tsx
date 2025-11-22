import { NavBar } from "./components/NavBar";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Education } from "./components/sections/Education";
import { TechStack } from "./components/sections/TechStack";
import { CallToAction } from "./components/sections/CallToAction";

function App() {
  return (
    <div className="bg-gaia-bg text-slate-50 min-h-screen bg-orbit">
      <NavBar />
      <main className="pt-20">
        <Hero />
        <HowItWorks />
        <Education />
        <TechStack />
        <CallToAction />
      </main>
      <footer className="border-t border-slate-800 mt-16 py-6 text-center text-sm text-slate-500">
        Projeto Gaia - Ctrl Alt Del - Tecsus
      </footer>
    </div>
  );
}

export default App;
// Projeto Gaia - Ctrl Alt Del - Tecsus