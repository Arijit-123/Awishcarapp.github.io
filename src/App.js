
import './App.css';
import Fetchdata from './Components/Fetchdata';
import Graphone from './Components/Graph-one';
import Graphtwo from './Components/Graph-two';

function App() {
  return (
    <>
    <div className='graph'>
    <Fetchdata/>
    </div>
    <h1>Closest Asteroid</h1>
    <div className='graph'><Graphone/></div>
    <h1>Average size of Asteroid</h1>
    <div className='graph'><Graphtwo/></div>
    
    </>
  );
}

export default App;
