import * as React from 'react';

const SelectInput = ({ name, onChange, defaultOption, value, options, className }) => {
  return (
        <select
          name={name}
          className={className}
          value={value}
          onChange={onChange}
          >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
  );
};

export default SelectInput;
