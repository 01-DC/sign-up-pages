import { useEffect, useState } from 'react';
import Link from 'next/link';

import { FaCheck } from 'react-icons/fa';
import InputMessage from '../../components/common/InputMessage';
import classNames from '../../utils/constants/classNames';
import InputError from '../../components/common/InputError';
import Input from './Input';

import zones from '../../utils/constants/zones';
import 'react-phone-input-2/lib/style.css';

import { useGlobalHomeContext } from '../../HomeContext';

const SignUp = () => {
  const { name, setName, email, setEmail, password, setPassword } =
    useGlobalHomeContext();

  const [passwordToggle, setPasswordToggle] = useState(false);

  // //////////////////ERRORS //////////////////

  const handleNameChange = (e) => {
    setName(e.target.value);
    // setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };

  return (
    // <Backdrop>
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
            Create Your
          </h6>
          <p
            className="mb-4 text-sm"
            style={{ color: '#788699', marginTop: '.7rem' }}
          >
            Share your story here.
          </p>
        </div>
      </div>
      <div className="basis-3/5 flex-1 self-center overflow-y-auto md:px-20">
        {/*  */}
        <div className="h-[60vh] overflow-y-auto">
          <div className="w-full max-w-xl" style={{ color: '#141820' }}>
            <div className={classNames('items-center hidden')}>
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
              >
                Next
              </button>
            </div>

            <form className={classNames('block w-full')}>
              <button
                type="button"
                className={classNames(
                  'md:font-semibold w-full flex justify-center items-center border border-signup-blue rounded-sm mt-4 px-3 py-2.5 text-sm text-signup-blue'
                )}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAMAAAClD0MEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGSUExURQAAAP+/AECA7zCfUN9AQN9AMPe/APe3CO+AIECH70CA7zCnUOdIMOdAOPq6BUCF9DWqUDWlVepFNepFMOpANfu7BPebEECD8zSnVDSnUOdENOtANPy+A0CE9fy8A0OD8jOmU+lDNulDMzapUzOpU+xDNulDNvq9A0KF8jKnUupCMjOqU+pDNfi7BUKE9DSoUjKmVDSpUutENOtCNvm7BEKD8zSnVOlENOlCNkKG9DSoUutENfq8Bfq8BEGD8zOmUzOmUehDNUKF9DOoU+pDNfq6BUGE8jOnU+lDNfu8BEKG8zeffzSpUzSnU+lDNkGF8/u8BUOE9EGF9DSoU+pDNepDNPu8BUGF9DSnUupENelCNfq9BUKF9ECK3UGF9DOoU+pDNelCNfu8BUKF9DSoUzOoU+tDNOpDNfu8Be66CeK5DvmtC9a4E8m3GPaWFKSzKPSHGpeyLPOAHYuxMfF4IHOuOu9pJlmrRE2qSUGpTkCK4EKF9D+M1kGH6j2StzmbjzuWozakZ+xSLzWmXTSoU+pDNcRMx+0AAABodFJOUwAQEBAQECAgICAgICAgMDAwMDAwMEBAQEBAQEBPT1BQUFBQX19fX2BgYGBvb3BwcHB/f3+AgICAgI+Pj5CQkJCQkJ+fn6CgoKCvr6+vr6+wv7+/v7+/z8/Pz8/f39/f39/f7+/v7+/vEvGb2gAAAi1JREFUeNrN1elf0zAYB/DHTVRkU1Fx3TxRJ6ICTgW85wTcxGu6TUUGHSoziveNUYGZ/N9+2tE2ydI07ccX/t416XdPzhXgP0jXicLdRpNS2pypFrK7NdHZKuXTmAyme0XUTjWrVLvkyi66UzFCqsqlLjlLzFB1GgnpzJo0KC8Od7Is1UjpX7H+aCzRjMSgIb5TG88kAWBj5lRNwc4IajLDdCZLfizBqycZoT9ZkzIocawgeWNcxvZ8Ztl57ds2hd5HYZsQQkstZ0X0L/cQsuBXmy0k9d1DZOej5Y5BqGHaeduiCyH+gw44Di21QpSDK8jLFr5r+6hfDgKUPVYWfvI49ss9d1msXNZ2dYCnnhsK45jp7dN2mHN9EV2oesz8BsK42SjriQFuRtm/On9eNui6+wADrnr5ZYR33SkuDzx3FWCzw15/JxXlSa57bhjchXm3TAgxFCzFjDMFAOfsMX4iVsy4v7vhsWfW8zaE0KtvpJ2LvqybKXfdbimjN8vEyYgPizGzw/vtpr4PhMkRuZtm2Px6W4V1JCerxjJ8Yb3V4ByZ6BFZeo7b9a1Oe56Hz3OcTBfJ2k+Gjbo9cZMIuX10R7snnWvPYrVjdlZ6iSSmaS56Tyu/mD13c5oEZu2HMEo7Y8Hwz2+M8bS4ZhqQrOJHsY490hgquRWTbG6vGcTy8rPUU1SqxUO+h35QUTIfV11qPzlhBH3YjGIHrYzFtb6Jxsk7j51DU7k2KEN/AZeF7avEtSekAAAAAElFTkSuQmCC"
                  alt="google signin"
                  className="h-4 mr-3"
                />
                <p style={{ fontSize: '15px' }}>Continue with Google</p>
              </button>
              <div
                className={classNames('flex justify-between mb-3.8')}
                style={{ marginTop: '1.1625rem' }}
              >
                <hr
                  className="w-full my-4"
                  style={{ backgroundColor: '#dfe3eb' }}
                />
                <p className="mx-2.5 mb-4 text-base antialiased">or</p>
                <hr
                  className="w-full my-4"
                  style={{ backgroundColor: '#dfe3eb' }}
                />
              </div>
              {/* *********NAme Email************* */}

              <div>
                <div className="relative flex flex-col gap-2 ">
                  <Input
                    label="Your Full Name"
                    name="name"
                    handleChange={handleNameChange}
                    value={name}
                    required
                    placeholder="Enter Your Full Name"
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
                    label="Your Email Address"
                    name="email"
                    handleChange={handleEmailChange}
                    value={email}
                    placeholder="Enter Email Address"
                    type="email"
                  />

                  {true && (
                    <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
                      <FaCheck />
                    </div>
                  )}
                </div>
                <div className="relative">
                  <label
                    className="my-2.5 font-semibold leading-relaxed block text-sm"
                    style={{ color: '#201e27' }}
                  >
                    Password
                  </label>
                  <input
                    placeholder="Enter Password"
                    name="password"
                    type={passwordToggle ? 'text' : 'password'}
                    style={{ lineHeight: 1.15 }}
                    onChange={handlePasswordChange}
                    value={password}
                    className="rounded-md mb-2.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-focus-cyan"
                  />
                  <button
                    type="button"
                    className={`absolute right-2 top-[50%] ${
                      !passwordToggle && 'opacity-70'
                    }`}
                    onClick={() => setPasswordToggle(!passwordToggle)}
                  >
                    <img
                      src={
                        passwordToggle
                          ? '/svg/password-eye-unhide.svg'
                          : '/svg/password-eye.svg'
                      }
                      alt="password hide and unhide"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>

              {/* *********Graduation************* */}

              <Link href="/signup/Location">
                <button
                  type="button"
                  className={classNames(
                    'bg-signup-blue disabled:cursor-not-allowed disabled:bg-opacity-50 mt-6 w-36 text-sm mx-auto mb-12 block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold'
                  )}
                  style={{ lineHeight: '1.375rem' }}
                >
                  Next
                </button>
              </Link>
            </form>

            <div style={{ margin: '0 10%' }}>
              <hr className="mx-auto my-5" style={{ background: '#ebedf1' }} />
              <p
                className="mt-5 mb-4 text-center"
                style={{ fontSize: '15px', color: '#788699' }}
              >
                By signing up, you&apos;re agreeing to our{' '}
                <span className="font-semibold cursor-pointer text-signup-blue">
                  Terms of Use
                </span>
              </p>
              <p
                className="mt-5 text-center"
                style={{ fontSize: '15px', color: '#788699' }}
              >
                Already have an account?{' '}
                <Link href="/login" passHref>
                  <span className="font-semibold cursor-pointer text-signup-blue">
                    Log In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Backdrop>
  );
};

export default SignUp;
