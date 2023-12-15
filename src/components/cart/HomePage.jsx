// HomePage.js
import React from 'react';

import ExpandableDropdown from './ExpandableDropdown';
import categoriesData from '../../constants/categoriesData';

const HomePage = () => {
  return (
    <div>
      <h1>Shopping Website</h1>
      <ul>
        {categoriesData.map((category) => (
          <ExpandableDropdown key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
