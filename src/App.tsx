import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { LeakageCalculator } from './components/LeakageCalculator';
import { WhoItsFor } from './components/WhoItsFor';
import { HowItWorks } from './components/HowItWorks';
import { Credibility } from './components/Credibility';
import { AuditOffer } from './components/AuditOffer';
import { WhatHappensNext } from './components/WhatHappensNext';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-bg bg-mesh-fluid text-muted font-sans relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Stats />
      <LeakageCalculator />
      <WhoItsFor />
      <HowItWorks />
      <Credibility />
      <AuditOffer />
      <WhatHappensNext />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
