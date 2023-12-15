// ExpandableDropdown.js
import React, { useState } from 'react';

const ExpandableDropdown = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li onMouseEnter={handleToggle} onMouseLeave={handleToggle} style={{}}>
      {category.name}
      {isExpanded && category.subcategories && category.subcategories.length > 0 && (
        <ul style={{width: "200px"}}>
          {category.subcategories.map((subCategory) => (
            <ExpandableDropdown key={subCategory.id} category={subCategory} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default ExpandableDropdown;
