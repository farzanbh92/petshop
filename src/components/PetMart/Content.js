import React, { useState } from 'react';
import Filter from './Filter';

const Content = () => {
  const [filter, setFilter] = useState({ checkbox: false, range: 50 });

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  return (
    <div>
      <h1 className="text-xl font-bold my-4 bg-gray-200 rounded-full py-2">Apply filters</h1>
      <Filter onFilterChange={handleFilterChange} />
    </div>
  );
};

export default Content;