import ParticleBackground from './components/ParticleBackground';
import Typed from 'react-typed'

import './App.css';


export default function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Typed className='Typing'
        strings= {[
          "SUP SUP THE NAMES FENGGET"
        ]}
        />
    </div>
  );
}


