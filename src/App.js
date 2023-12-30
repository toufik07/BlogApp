
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/create/:id' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
