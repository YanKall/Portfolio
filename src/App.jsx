import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AllProjects from './pages/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import CineTrack from './pages/CineTrack';
import CareConnect from './pages/CareConnect';
import DiscoverSG from './pages/DiscoverSG';
import SnakeGame from './pages/SnakeGame';
import HotelWebsite from './pages/HotelWebsite';
import WebDesign from './pages/WebDesign';
import PythonAudio from "./pages/PythonAudio";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/cinetrack" element={<CineTrack />} />
        <Route path="/careconnect" element={<CareConnect />} />
        <Route path="/discoversg" element={<DiscoverSG />} />
        <Route path="/snakegame" element={<SnakeGame />} />
        <Route path="/hotelwebsite" element={<HotelWebsite />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/pythonaudio" element={<PythonAudio />} />
      </Routes>

      <Contact />
    </>
  );
}

export default App;