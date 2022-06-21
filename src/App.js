import Destination from './components/media/pages/Destination';
import Technology from './components/media/pages/technology';
import Home from './components/media/pages/Home';
import Crew from './components/media/pages/Crew';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Destination' element={<Destination />} />
        <Route path='/Crew' element={<Crew />} />
        <Route path='/Technology' element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
