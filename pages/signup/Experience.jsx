/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Error from '../../components/common/InputError';
import classNames from '../../utils/constants/classNames';
import Input from './Input';

import { useGlobalHomeContext } from '../../HomeContext';

const Experience = () => {
  const { experience, setExperience } = useGlobalHomeContext();
  const router = useRouter();

  const dataSet = [
    { name: 'Business' },
    { name: 'Sales' },
    { name: 'Marketing' },
    { name: 'Networking' },
    { name: 'Systems' },
    { name: 'Backend' },
    { name: 'Security' },
    { name: 'Frontend' },
    { name: 'Data Science' },
    { name: 'Testing' },
    { name: 'Product Management' },
    { name: 'Finance' },
    { name: 'Hardware' },
    { name: 'UI/UX Design' },
    { name: 'Full Stack' },
    { name: 'Mobile' },
    { name: 'Product Design' },
    { name: 'Machine Learning' },
    { name: 'Accounting' },
    { name: 'Trading' },
    { name: 'Art' },
    { name: 'Legal' },
    { name: 'Biotech' },
  ];

  const [totalSelectedItems, setTotalSelectedItems] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updateItems = (itemName) => {
    const index = experience.findIndex((x) => x === itemName);
    const temp = [...experience];
    if (index >= 0) {
      temp.splice(index, 1);
      setExperience(temp);
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
        setExperience(temp);
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
    setTotalSelectedItems(experience.length);
  }, [experience]);

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
    <div className="flex w-screen h-screen overflow-y-hidden bg-white">
      <div
        className="basis-2/5 flex-1 flex flex-col justify-center !bg-bottom !bg-contain !bg-no-repeat"
        style={{
          background: '#eff2f6',

          backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
        }}
      >
        <div className="px-10 pt-10">
          <h6
            className="my-6 text-2xl font-semibold"
            style={{ lineHeight: '1.875rem' }}
          >
            Create Your Profile
          </h6>
          <p
            className="mb-4 text-sm"
            style={{ color: '#788699', marginTop: '.7rem' }}
          >
            Share your story here.
          </p>
        </div>
      </div>

      <div className="basis-3/5 flex-1 self-center px-4 py-6 overflow-y-auto md:px-20">
        <div className="">
          <div className="w-full max-w-xl pt-8" style={{ color: '#141820' }}>
            <div
              className={classNames('mt-10 flex items-center justify-between')}
            >
              <button type="button" onClick={() => router.back()}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
                  height={30}
                  width={30}
                  alt="back"
                  className="cursor-pointer"
                />
              </button>

              <div className="flex">
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
              </div>
              <Link href="/signup/Skills">
                <button
                  type="button"
                  className={classNames(
                    'py-2 px-8 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed'
                  )}
                >
                  Next
                </button>
              </Link>
              <button
                type="button"
                className={classNames(
                  'py-2 px-8 bg-signup-blue text-white rounded-md text-sm font-medium hidden'
                )}
              >
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl pt-12 h-[60vh] overflow-y-auto">
          <div className="">
            <p className="mb-2 font-semibold text-md">
              What areas have you had the most experience with?
            </p>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 my-2 text-sm text-gray-600 border border-gray-300 rounded-md outline-none"
                placeholder="Example: Data Science, Data Analyst..."
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
                    type="button"
                    key={index}
                    className="flex items-center w-full h-8 px-3 mt-1 text-sm font-medium text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => updateItems(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-1">
                {dataSet.map((item, index) => {
                  const i = experience.findIndex((x) => x === item.name);
                  return (
                    <button
                      type="button"
                      key={index}
                      className="inline-block px-4 py-3 mb-3 mr-2 text-sm text-gray-500 border border-gray-300 rounded-full cursor-pointer select-none"
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
