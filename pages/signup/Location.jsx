/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import ReactFlagsSelect from 'react-flags-select';

import timezones from '../../utils/constants/zones';
import classNames from '../../utils/constants/classNames';

import { useGlobalHomeContext } from '../../HomeContext';

const Location = () => {
  const [showLocationSelection, setShowLocationSelection] = useState(false);
  const {
    currentTimezone,
    setCurrentTimezone,
    countrySelected,
    setCountrySelected,
  } = useGlobalHomeContext();
  const router = useRouter();

  const [displayFields, setDisplayFields] = useState(false);
  const [displayTimezoneMenu, setDisplayTimezoneMenu] = useState(false);
  const [countryName, setCountryName] = useState(null);
  const [timezonesList, setTimezoneList] = useState([]);

  const handleUpdateLocation = () => {
    setShowLocationSelection(!showLocationSelection);
    if (showLocationSelection) {
      // updateLocation
      setDisplayFields((prevState) => !prevState);
    }
  };
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
                className={classNames(
                  'mt-10 flex items-center justify-between'
                )}
              >
                <button type="button">
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
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
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
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                    )}
                  />
                </div>
                <button
                  type="button"
                  className={classNames(
                    'py-2 px-8 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed'
                  )}
                  // disabled={!validated}
                  onClick={() => router.replace('/signup/graduation')}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="">
            <div className="w-full max-w-xl pt-8" style={{ color: '#141820' }}>
              <div className="flex items-center">
                <p className="w-full leading-6">
                  We noticed that you&apos;re signing in from India. Do you want
                  your current location to be updated as we personalize the
                  companies and opportunities for you according to your
                  location?
                </p>
              </div>
              {!showLocationSelection && (
                <div
                  className={classNames(
                    'mt-7 w-9/12 m-auto h-52'
                    // displayFields ? 'hidden' : ''
                  )}
                >
                  <div className="mt-4 border border-gray-300 rounded-lg">
                    <div className="px-4 py-5 border-b border-gray-300">
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
                          className="ml-1 font-normal text-black"
                          style={{ fontSize: '16px' }}
                        >
                          {countrySelected}
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
                        <p className="ml-1 font-normal text-black">
                          {/* Kolkata */}
                          {currentTimezone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showLocationSelection && (
                <div
                  className={classNames(
                    'mt-7 h-52'
                    // displayFields ? '' : 'hidden'
                  )}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="inline-block mb-1 text-sm font-semibold"
                    >
                      Location
                    </label>
                    <div className="relative">
                      <ReactFlagsSelect
                        showSelectedLabel
                        selected={countrySelected}
                        onSelect={(code) => setCountrySelected(code)}
                      />
                      <div className="absolute -translate-y-1/2 pointer-events-none top-1/2 right-5">
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
                  <div className="flex flex-col mb-2">
                    <label
                      htmlFor="timezone"
                      className="inline-block mb-1 text-sm font-semibold"
                    >
                      Timezone
                    </label>
                    <div className="relative w-full h-10">
                      <div
                        className="w-full h-full pl-3 pr-6 rounded-md mb-2.5 border border-gray-300 text-sm 
                outline-none appearance-none cursor-pointer flex items-center"
                        id="timezone-dropdown"
                      >
                        {currentTimezone === '' ? (
                          <p className="pointer-events-none">Select Timezone</p>
                        ) : (
                          <p className="pointer-events-none">
                            {currentTimezone}
                          </p>
                        )}

                        {/* <p className="pointer-events-none">Select Timezone</p> */}
                      </div>
                      <div className="absolute -translate-y-1/2 pointer-events-none top-1/2 right-5">
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
                            className="flex items-center w-full h-8 px-3 text-sm font-medium text-left cursor-pointer hover:bg-gray-100"
                            onClick={() =>
                              handlTimezone(timezones.zones[timezone])
                            }
                          >
                            {`${timezones.zones[timezone].country}(${timezones.zones[timezone].offset}), ${timezones.zones[timezone].city}`}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-center">
                <button
                  type="button"
                  className="p-3 text-sm text-white bg-blue-500 rounded-md"
                  onClick={handleUpdateLocation}
                >
                  Update Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
