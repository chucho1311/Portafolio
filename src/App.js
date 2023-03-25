import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';

function App() {
  return (
    <div className="">
      <header className="row App-header" style={{margin:0, padding:0}}>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
