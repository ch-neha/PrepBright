import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Subject from './pages/Subject';
import Resource from './pages/Resource';
import Material from './pages/Material';

function App() {
  return (
    <div className="App">
      {/* create routes */}
      <Routes>
        {/* Route for home component */}
        <Route path='' element={<Home />} />
        <Route path='subjects' element={<Subject />} />
        <Route path='resource' element={<Resource />} />
        <Route path='subjects/resources' element={<Material />} />
      </Routes>
    </div>
  );
}

export default App;