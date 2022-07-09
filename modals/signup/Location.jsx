/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import timezones from '../../utils/constants/zones';
import classNames from '../../utils/constants/classNames';

const Location = ({
  currentTimezone,
  setCurrentTimezone,
  countrySelected,
  setCountrySelected,
}) => {
  const [displayFields, setDisplayFields] = useState(false);
  const [displayTimezoneMenu, setDisplayTimezoneMenu] = useState(false);
  const [countryName, setCountryName] = useState(null);
  const [timezonesList, setTimezoneList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayFields((prevState) => !prevState);
  };
  const handleWindowClick = (e) => {
    if (e.target.id === 'timezone-dropdown') setDisplayTimezoneMenu(true);
    else setDisplayTimezoneMenu(false);
  };
  const handlTimezone = (_timezone) => {
    setCurrentTimezone(
      `${_timezone.country}(${_timezone.offset}), ${_timezone.city}`
    );
  };

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let tempZone = timezones.zones[tz];
    if (!tempZone) {
      tempZone = timezones.zones['Asia/Kolkata'];
    }

    setCountryName(timezones.countries[tempZone.countries[0]].name);
    setCountrySelected(tempZone.countries[0]);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  useEffect(() => {
    if (document.querySelector('.ReactFlagsSelect-module_label__27pw9')) {
      setCountryName(
        document.querySelector('.ReactFlagsSelect-module_label__27pw9')
          .textContent
      );
      const filteredZones = Object.keys(timezones.countries).filter(
        (tz) => tz === countrySelected
      );
      setTimezoneList(timezones.countries[filteredZones[0]].zones);
      let tempzone;
      if (!currentTimezone) {
        tempzone =
          timezones.zones[Intl.DateTimeFormat().resolvedOptions().timeZone];

        if (!tempzone) {
          tempzone = timezones.zones['Asia/Kolkata'];
        }
      } else {
        tempzone =
          timezones.zones[timezones.countries[filteredZones[0]].zones[0]];
      }
      handlTimezone(tempzone);
    }
  }, [countrySelected]);

  return (
    <>
      <div className="flex items-center">
        <p className="w-full leading-6">
          We noticed that you&apos;re signing in from {countryName}. Do you want
          your current location to be updated as we personalize the companies
          and opportunities for you according to your location?
        </p>
      </div>
      <div
        className={classNames(
          'mt-7 w-9/12 m-auto h-52',
          displayFields ? 'hidden' : ''
        )}
      >
        <div className="mt-4 border border-gray-300 rounded-lg">
          <div className="border-b border-gray-300 px-4 py-5">
            <p className="font-semibold">Locale Details</p>
          </div>
          <div className="px-4 py-5">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: '20px',
                  width: '20px',
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <p
                className="font-normal text-black ml-1"
                style={{ fontSize: '16px' }}
              >
                {countryName}
              </p>
            </div>
            <div className="flex mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '20px', width: '20px' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="font-normal text-black ml-1">{currentTimezone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames('mt-7 h-52', displayFields ? '' : 'hidden')}>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="font-semibold inline-block mb-1 text-sm"
          >
            Location
          </label>
          <div className="relative">
            <ReactFlagsSelect
              showSelectedLabel
              selected={countrySelected}
              onSelect={(code) => setCountrySelected(code)}
            />
            <div className="absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: '12px',
                  width: '12px',
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-2 flex flex-col">
          <label
            htmlFor="timezone"
            className="font-semibold inline-block mb-1 text-sm"
          >
            Timezone
          </label>
          <div className="h-10 w-full relative">
            <div
              className="w-full h-full pl-3 pr-6 rounded-md mb-2.5 border border-gray-300 text-sm 
                outline-none appearance-none cursor-pointer flex items-center"
              id="timezone-dropdown"
            >
              {currentTimezone === '' ? (
                <p className="pointer-events-none">Select Timezone</p>
              ) : (
                <p className="pointer-events-none">{currentTimezone}</p>
              )}
            </div>
            <div className="absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: '12px',
                  width: '12px',
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={classNames(
                'w-full max-h-32 overflow-y-scroll absolute right-0 z-10 border rounded-md border-gray-300 bg-white py-1 ml-1',
                !displayTimezoneMenu ? 'hidden' : ''
              )}
            >
              {timezonesList.map((timezone, index) => (
                <button
                  key={index}
                  type="button"
                  className="px-3 h-8 flex items-center cursor-pointer w-full text-left
                    font-medium text-sm hover:bg-gray-100"
                  onClick={() => handlTimezone(timezones.zones[timezone])}
                >
                  {`${timezones.zones[timezone].country}(${timezones.zones[timezone].offset}), ${timezones.zones[timezone].city}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 text-white p-3 rounded-md text-sm"
          onClick={handleClick}
        >
          Update Location
        </button>
      </div>
    </>
  );
};

export default Location;
