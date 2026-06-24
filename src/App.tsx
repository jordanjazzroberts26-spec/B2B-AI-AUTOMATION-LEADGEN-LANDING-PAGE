import { Navbar } from './components/Navbar';
import { PremiumHero } from './components/ui/hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-bg text-primary font-sans relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple opacity-[0.03] blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-neon opacity-[0.03] blur-[150px] pointer-events-none translate-x-1/2 translate-y-1/2 rounded-full" />

      <CursorGlow />
      <Navbar />
      <PremiumHero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
