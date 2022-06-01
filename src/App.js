import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Subject from './pages/Subject';
import Resource from './pages/Resource';
import Material from './pages/Material';
import ResourceForm from './Components/ResourceForm';
import SubjectForm from './Components/SubjectForm';

function App() {
  return (
    <div className="App">
      {/* create routes */}
      <Routes>
        {/* Route for home component */}
        <Route path='' element={<Home />} />
        <Route path='subjects' element={<Subject />} />
        <Route path='addsubject' element={<SubjectForm />} />
        <Route path='select-resource' element={<Resource />} />
        <Route path='resources' element={<Material />} />
        <Route path='addresource' element={<ResourceForm />} />

      </Routes>
    </div>
  );
}

export default App;
