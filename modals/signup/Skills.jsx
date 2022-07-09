/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

const Skills = ({ skills, setSkills }) => {
  const dataSet = [
    { name: 'Angular js', selected: false },
    { name: 'Apache spark', selected: false },
    { name: 'C', selected: false },
    { name: 'C++', selected: false },
    { name: 'Kotlin', selected: false },
    { name: 'Java', selected: false },
    { name: 'Python', selected: false },
    { name: 'Node js', selected: false },
    { name: 'React js', selected: false },
    { name: 'Linux', selected: false },
    { name: 'Github', selected: false },
    { name: 'SQL', selected: false },
    { name: 'MongoDB', selected: false },
  ];

  const [totalSelectedItems, setTotalSelectedItems] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updateItems = (itemName) => {
    const index = skills.findIndex((x) => x === itemName);
    const temp = [...skills];
    if (index >= 0) {
      temp.splice(index, 1);
      setSkills(temp);
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
        setSkills(temp);
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
    setTotalSelectedItems(skills.length);
  }, [skills]);

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
        Rank your skills from the list below.
      </p>
      <div className="relative" style={{ width: '464px' }}>
        <input
          type="text"
          className="my-2 w-full border border-gray-300 rounded-md py-2 px-4 text-gray-600 outline-none text-sm"
          placeholder="Example: Java, C++"
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <div
          className={`${
            autocomplete.disabled ? 'hidden' : ''
          } max-h-64 overflow-y-scroll absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-1`}
          style={{ width: 'calc(100% + 20px)' }}
        >
          {autocomplete.data.map((item, index) => (
            <button
              key={index}
              type="button"
              className="w-full px-3 mt-1 h-8 flex items-center cursor-pointer 
            font-medium text-sm hover:bg-gray-100"
              onClick={() => updateItems(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-1">
          {dataSet.map((item, index) => {
            const i = skills.findIndex((x) => x === item.name);
            return (
              <button
                type="button"
                key={index}
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

export default Skills;
