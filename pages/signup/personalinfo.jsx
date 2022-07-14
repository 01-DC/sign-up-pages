import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import { FaCheck } from 'react-icons/fa';
import InputMessage from '../../components/common/InputMessage';
import Backdrop from '../../components/common/Backdrop';
import classNames from '../../utils/constants/classNames';
import Input from './Input';
import InputError from '../../components/common/InputError';
import Experience from './Experience';
import Interests from './Interests';
import Skills from './Skills';
import SocialMedia from './SocialMedia';
import Location from './Location';
import zones from '../../utils/constants/zones';
import 'react-phone-input-2/lib/style.css';

import { useGlobalHomeContext } from '../../HomeContext';

const PersonalInfo = () => {
  const {
    username,
    setUsername,
    alternateEmail,
    setAlternateEmail,
    mobileNo,
    setMobileNo,
    altMobileNo,
    setAltMobileNo,
    about,
    setAbout,
  } = useGlobalHomeContext();
  const router = useRouter();
  const [validation, setValidation] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleAlternateEmailChange = (e) => {
    setAlternateEmail(e.target.value);
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleMobileNoChange = (num) => {
    setMobileNo(num);
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleAltMobileNoChange = (num) => {
    setAltMobileNo(num);
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleAboutChange = (e) => {
    setAbout(e.target.value);
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
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
        {/*  */}
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
              <Link href="/signup/Interests">
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

        {/*  */}
        <div className="w-full h-[60vh] overflow-y-auto">
          <div className={classNames('mt-8 w-full max-w-xl')}>
            <div className="relative flex flex-col gap-2 ">
              <Input
                label="User Name"
                name="username"
                handleChange={handleUsernameChange}
                value={username}
                placeholder="Enter Username"
                type="text"
              />

              {true && (
                <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
                  <FaCheck />
                </div>
              )}
            </div>

            <div className="relative flex flex-col gap-2 ">
              <Input
                label="Alternate Email"
                name="alternateEmail"
                handleChange={handleAlternateEmailChange}
                value={alternateEmail}
                placeholder="Enter Alternate Email"
                type="text"
              />

              {true && (
                <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
                  <FaCheck />
                </div>
              )}
            </div>

            <div className="flex">
              <div className="flex-1">
                <label
                  className="my-2.5 w-6/12 font-semibold leading-relaxed block text-sm"
                  style={{
                    color: '#201e27',
                  }}
                >
                  Mobile Number
                </label>
                <PhoneInput
                  country="in"
                  value={mobileNo}
                  onChange={(num) => handleMobileNoChange(num)}
                  countryCodeEditable={false}
                  placeholder="99999 99999"
                  inputStyle={{ width: '100%' }}
                />
              </div>
              <div className="flex-1 ml-10">
                <label
                  className="my-2.5 w-full  font-semibold leading-relaxed block text-sm"
                  style={{ color: '#201e27' }}
                >
                  Alternate Mobile Number
                </label>
                <PhoneInput
                  country="in"
                  value={altMobileNo}
                  onChange={(num) => handleAltMobileNoChange(num)}
                  countryCodeEditable={false}
                  placeholder="99999 99999"
                  inputStyle={{ width: '100%' }}
                />
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <label className="mb-2 text-sm font-semibold" htmlFor="about">
                About Me
              </label>
              <textarea
                rows={10}
                className="px-4 py-2 text-sm text-gray-600 transition duration-200 ease-out border rounded-md outline-none resize-none focus:border-blue-700"
                name="about"
                value={about}
                onChange={handleAboutChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
