import { About } from './components/About';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { SelectedWork } from './components/SelectedWork';
import { Stack } from './components/Stack';
import { WhatIDo } from './components/WhatIDo';
import { Writing } from './components/Writing';

export default function App() {
  return (
    <div className="mesh-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Stack />
        <SelectedWork />
        <Writing />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
