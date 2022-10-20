import { useContext } from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Service';
import Testimonial from './components/Testimonial/Testimonial';
import Work from './components/Works/Work';
import { ThemeContext } from './Context';
import Projects from './Projects/Projects';

function App() {
  const theme = useContext(ThemeContext)
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
