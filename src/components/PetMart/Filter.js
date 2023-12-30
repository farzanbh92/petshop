import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    onFilterChange({ checkbox: isChecked });
  };

  const handleRangeChange = (e) => {
    const selectedRange = e.target.value;
    onFilterChange({ range: selectedRange });
  };

  return (
    <div className="my-4 p-4 bg-gray-200 bg-opacity-60 rounded-md mx-20 md:mx-0">
      <label className="block mb-2 text-lg font-bold">
        Choose your pet
      </label>
      <div className="mb-4">
       <div className='mt-4'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 1</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 2</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 3</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 4</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 5</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 6</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 7</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 8</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 9</label>
        </div>

        <div className='mt-2'> 
        <input
          type="checkbox"
          id="checkboxFilter"
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="checkboxFilter">item 0</label>
        </div>

      </div>
      <div className="mb-4 mt-12">
        <label htmlFor="rangeFilter" className="block mb-2 text-lg font-bold">
          Maximum price
        </label>
        <input
          type="range"
          id="rangeFilter"
          min="0"
          max="100"
          step="1"
          onChange={handleRangeChange}
          className="w-full"
        />
      </div>
      
    </div>
  );
};

export default Filter;