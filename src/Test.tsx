import { useState } from 'react';
import './App.css';
/* import { Welcome } from './components/Welcome'; */

const Test = () => {
  const [name, setName] = useState("");

  const [colors, setColors] = useState([
    "#ff0000",
    "#ffff00",
    "#00ff00"
  ])

  return (
    <div className="card" style={{ margin: '40px auto' }}>
      {
        colors.map((color, index) => {
          return (
            <div style={{ width: '50px', height: '50px', backgroundColor: color, borderRadius: '100%', margin: '5px'}} key={index}>
            
            </div>
          )
        })
      }

      <p className={'text-center ' + (name === 'Hugo' ? "text-danger brillo" : "")} onClick={() => setName('Hugo')}>Hugo</p>
      <p className={'text-center ' + (name === 'Paco' ? "text-warning brillo" : "")} onClick={() => setName('Paco')}>Paco</p>
      <p className={'text-center ' + (name === 'Luis' ? "text-success brillo" : "")} onClick={() => setName('Luis')}>Luis</p>
      {/* <Welcome name={"Luis Javier"} messageCount={10} isLoggedIn={true} />
      <Welcome name={"Jose Luis"} messageCount={10} isLoggedIn={false} />
      <Welcome name={"Derek Javier"} messageCount={10} isLoggedIn={true} /> */}
    </div>
  );
}

export default Test;
