import '../styles/Navbar.scss';
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../context/Users";
import { getCategories } from '../utils/api';

function Navbar({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);


  const { loggedUser } = useContext(UserContext);

  useEffect(() => {
    getCategories().then((topics) => {
      setCategories(topics);
    });
  }, []);

  let userInfo = loggedUser ? loggedUser.username : 'No User Logged in';

  const articlesCategories = categories.map(category => {
    const categoryName = category.slug.charAt(0).toUpperCase() + category.slug.slice(1);
    return (
      <Link className='cat-link' key={category.slug} to={`/articles/topics/${category.slug}`}>
        <li>{categoryName}</li>
      </Link>
    );
  });
  return (
    <div className="navbar">
      <ul className='categories'>
        <Link className='cat-link' to='/'><li>All</li></Link>
        {articlesCategories}
      </ul>
      <p className='user-info'>Logged in as: <span> {userInfo}</span></p>
    </div>
  );
}

export default Navbar;