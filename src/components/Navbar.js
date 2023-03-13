import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

import '../styles/Navbar.css';

function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((topics) => {
      setCategories(topics);
    });
  }, []);

  const articlesCategories = categories.map(category => {
    return (
      <li key={category.slug}>{category.slug}</li>
    );
  });

  return (
    <ul className='nav'>
      {articlesCategories}
    </ul>
  );
}

export default Navbar;