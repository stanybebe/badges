import React from 'react';

function RadioGroup({ selectedValue, handleChange }) {
  return (
    <div>
      <h2>Select a value:</h2>
      <label>
        <input
          type="radio"
          value="0%"
          checked={selectedValue === '0%'}
          onChange={handleChange}
        />
        0%
      </label>
      <label>
        <input
          type="radio"
          value="25%"
          checked={selectedValue === '25%'}
          onChange={handleChange}
        />
        25%
      </label>
      <label>
        <input
          type="radio"
          value="50%"
          checked={selectedValue === '50%'}
          onChange={handleChange}
        />
        50%
      </label>
      <label>
        <input
          type="radio"
          value="75%"
          checked={selectedValue === '75%'}
          onChange={handleChange}
        />
        75%
      </label>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

export default RadioGroup;
