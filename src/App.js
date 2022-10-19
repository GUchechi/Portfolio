import './App.css';
import Intro from './components/Intro/Intro';

import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
    </div>
  );
}

export default App;
