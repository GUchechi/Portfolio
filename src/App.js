import './App.css';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
    </div>
  );
}

export default App;
