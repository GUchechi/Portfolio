import './App.css';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Service';
import Testimonial from './components/Testimonial/Testimonial';
import Work from './components/Works/Work';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Projects />
      <Testimonial />
    </div>
  );
}

export default App;
