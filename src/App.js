import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';

import './styles/App.scss';
import UserLogin from './components/UserLogin';
import { useContext } from 'react';
import { UserContext } from './context/Users';

function App() {
  const { loggedUser } = useContext(UserContext);

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/users' element={<UserLogin />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>

    </div>
  );
}

export default App;
