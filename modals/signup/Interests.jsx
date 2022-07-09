/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Error from '../../components/common/InputError';

const Interests = ({ roles, setRoles, error }) => {
  const dataSet = [
    { name: 'IT System Administrator' },
    { name: 'Sales' },
    { name: 'Data Scientist' },
    { name: 'Data Engineer' },
    { name: 'ML Engineer' },
    { name: 'Back End Developer' },
    { name: 'Product Manager' },
    { name: 'HR' },
    { name: 'Full Stack Developer' },
    { name: 'Front End Developer' },
    { name: 'Business Operations' },
    { name: 'Finance' },
    { name: 'Legal' },
    { name: 'Product Designer' },
    { name: 'Devops Engineer' },
    { name: 'Marketing' },
    { name: 'Systems Engineer' },
    { name: 'IOS Engineer' },
    { name: 'Consulting' },
    { name: 'Android Engineer' },
    { name: 'Supply Chain Management' },
    { name: 'Network Engineer' },
    { name: 'Content Strategist' },
    { name: 'Security Engineer' },
    { name: 'Recruiting' },
    { name: 'Accounting' },
    { name: 'Hardware Engineer' },
    { name: 'Graphic Designer' },
    { name: 'Logistics Coordinator' },
    { name: 'Copywriting' },
    { name: 'Not Sure Yet' },
  ];
  const [totalSelectedItems, setTotalSelectedItems] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updateItems = (itemName) => {
    const index = roles.findIndex((x) => x === itemName);
    const temp = [...roles];
    if (index >= 0) {
      temp.splice(index, 1);
      setRoles(temp);
      setInputValue('');
      setAutocomplete({
        disabled: true,
        data: [],
      });
      return;
    }
    for (let i = 0; i < dataSet.length; i++) {
      if (dataSet[i].name === itemName && totalSelectedItems < 7) {
        temp.push(itemName);
        setRoles(temp);
        break;
      }
    }
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  useEffect(() => {
    setTotalSelectedItems(roles.length);
  }, [roles]);

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '')
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, 'i');

      dataSet.forEach((item) => {
        if (regex.test(item.name)) autocompleteData.push(item.name);
      });

      setAutocomplete({
        disabled: false,
        data: [e.target.value, ...autocompleteData],
      });
    }
  };

  return (
    <div className="">
      <p className="text-md font-semibold mb-2">
        Which of these roles are you most interested in?
      </p>

      <div className="relative" style={{ width: '464px' }}>
        <input
          type="text"
          className="my-2 w-full border border-gray-300 rounded-md py-2 px-4 text-gray-600 outline-none text-sm"
          placeholder="Example: Sales, Marketing..."
          value={inputValue}
          onChange={handleInputValueChange}
        />
        {error && <Error error={error} />}
        <div
          className={`${
            autocomplete.disabled ? 'hidden' : ''
          } max-h-64 overflow-y-scroll absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-1`}
          style={{ width: 'calc(100% + 20px)' }}
        >
          {autocomplete.data.map((item, index) => (
            <button
              type="button"
              key={index}
              className="px-3 h-8 w-full text-left flex items-center cursor-pointer 
                    font-medium text-sm hover:bg-gray-100"
              onClick={() => updateItems(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-1">
          {dataSet.map((item) => {
            const i = roles.findIndex((x) => x === item.name);
            return (
              <button
                type="button"
                key={item.name}
                className="inline-block border border-gray-300 
                  rounded-full mr-2 mb-3 py-3 px-4 text-sm cursor-pointer text-gray-500 select-none"
                style={{
                  background: i >= 0 ? '#61a0ff' : '',
                  color: i >= 0 ? '#fff' : '',
                }}
                onClick={() => updateItems(item.name)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Interests;
