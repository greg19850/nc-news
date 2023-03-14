import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Articles from './components/Articles';

import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Articles />} />
      </Routes>

    </div>
  );
}

export default App;
