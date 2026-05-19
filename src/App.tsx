import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { WhoItsFor } from './components/WhoItsFor';
import { HowItWorks } from './components/HowItWorks';
import { Credibility } from './components/Credibility';
import { AuditOffer } from './components/AuditOffer';
import { WhatHappensNext } from './components/WhatHappensNext';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-muted font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <WhoItsFor />
      <HowItWorks />
      <Credibility />
      <AuditOffer />
      <WhatHappensNext />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
