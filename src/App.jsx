import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AllProjects from './pages/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CineTrack from './pages/CineTrack';
import CareConnect from './pages/CareConnect';
import DiscoverSG from './pages/DiscoverSG';
import SnakeGame from './pages/SnakeGame';
import HotelWebsite from './pages/HotelWebsite';
import WebDesign from './pages/WebDesign';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cinetrack" element={<CineTrack />} />
        <Route path="/careconnect" element={<CareConnect />} />
        <Route path="/discoversg" element={<DiscoverSG />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/snakegame" element={<SnakeGame />} />
        <Route path="/hotelwebsite" element={<HotelWebsite />} />
        <Route path="/webdesign" element={<WebDesign />} />
      </Routes>
    </>
  );
}

export default App;