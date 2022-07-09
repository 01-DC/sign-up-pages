import { useEffect, useState } from 'react';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import InputMessage from '../../components/common/InputMessage';
import Backdrop from '../../components/common/Backdrop';
import classNames from '../../utils/constants/classNames';
import InputError from '../../components/common/InputError';
import Experience from './Experience';
import Input from './Input';
import Interests from './Interests';
import Skills from './Skills';
import SocialMedia from './SocialMedia';
import Location from './Location';
import zones from '../../utils/constants/zones';
import 'react-phone-input-2/lib/style.css';

const SignUp = ({ handleClose }) => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [otp, setOtp] = useState({ isEnabled: false, otpData: '' });
  const [steps, setSteps] = useState(1);
  const { isEnabled, otpData } = otp;
  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    location: '',
    timeZone: '',
    college: '',
    graduationYear: 0,
    degree: '',
    major: '',
    alternateEmail: '',
    mobileNo: '+91 ',
    altMobileNo: '+91 ',
    about: '',
    intrestedRoles: [],
    experience: [],
    skills: [],
  });
  const [errors, setErrors] = useState({
    fNameError: '',
    usernameError: '',
    emailError: '',
    passwordError: '',
    collegeError: '',
    graduationYearError: '',
    degreeError: '',
    majorError: '',
    validated: false,
    otpError: '',
    usernameAvail: false,
    altEmailError: '',
    rolesError: 'Please select atleast 2 roles',
    emailLoad: '',
    usernameLoad: '',
    otpLoad: '',
  });
  const {
    college,
    email,
    name,
    degree,
    experience,
    graduationYear,
    password,
    skills,
    major,
    intrestedRoles,
    alternateEmail,
    mobileNo,
    altMobileNo,
    about,
    username,
    timeZone,
    location,
  } = data;

  const {
    collegeError,
    degreeError,
    emailError,
    usernameAvail,
    altEmailError,
    fNameError,
    usernameError,
    graduationYearError,
    majorError,
    passwordError,
    otpError,
    validated,
    rolesError,
    usernameLoad,
    emailLoad,
    otpLoad,
  } = errors;

  const setCurrentTimezone = (e) => setData((f) => ({ ...f, timeZone: e }));
  const setCountrySelected = (e) => setData((f) => ({ ...f, location: e }));
  const setIntrestedRoles = (e) =>
    setData((f) => ({ ...f, intrestedRoles: e }));
  const setExperience = (e) => setData((f) => ({ ...f, experience: e }));
  const setSkills = (e) => setData((f) => ({ ...f, skills: e }));

  const handleSetErrors = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));
  const setValidation = (val) => handleSetErrors('validated', val);

  const handleSubmit = () => {
    const body = { ...data };
    const temp = Object.values(zones.zones).filter(
      (x) => x.city === timeZone.split(', ')[1]
    );
    delete body.timeZone;
    delete body.location;
    body.location = {
      city: temp[0].city,
      country: temp[0].country,
    };
    body.graduationYear = parseInt(graduationYear, 10);
    setSteps(steps + 1);
    import('../../utils/apis/auth').then(({ signUp }) => {
      signUp(body)
        .then(() => {
          document.getElementById('otp').focus();
          setOtp((f) => ({ ...f, isEnabled: true }));
        })
        .catch(() => {
          setOtp({ isEnabled: false, otpData: '' });
          setSteps(7);
        });
    });
  };
  const resetErrors = () =>
    setErrors((f) => ({
      ...f,
      fNameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      collegeError: '',
      graduationYearError: '',
      degreeError: '',
      majorError: '',
      otpError: '',
    }));

  useEffect(() => {
    if (otpData.length >= 6) {
      handleSetErrors('otpLoad', 'Validating OTP');
      setOtp((f) => ({ ...f, isEnabled: false }));
      import('../../utils/apis/auth').then(({ verifyOtp }) => {
        verifyOtp(otpData, email)
          .then((res) => {
            handleSetErrors('otpLoad', 'OTP Validated');
            window.location.replace(process.env.NEXT_PUBLIC_DASHBOARD_URL+`?token=${res.headers["token"]}`);
          })
          .catch(() => {
            handleSetErrors('otpLoad', '');
            setOtp((f) => ({ ...f, isEnabled: true }));
            handleSetErrors('otpError', 'Invalid OTP !');
          });
      });
    } else {
      handleSetErrors('otpLoad', '');
    }
  }, [otpData]);

  const handleOTP = (e) => {
    if (e.target.value.length <= 6) {
      setOtp((f) => ({ ...f, otpData: e.target.value }));
    }
    resetErrors();
  };

  const handleSteps = (page) => {
    setSteps(page);
    if (page === 2 || page === 6 || page === 7) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  // //////////////////ERRORS //////////////////
  const checkName = (value, test) => {
    if (value.length === 0) {
      if (!test) handleSetErrors('fNameError', 'Name is required');

      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkEmail = (value, test) => {
    if (value.length === 0) {
      if (!test) handleSetErrors('emailError', 'Email is required');
      return false;
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      if (!test) handleSetErrors('emailError', 'Not a valid email');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkPassword = (value, test) => {
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)) {
      if (!test)
        handleSetErrors(
          'passwordError',
          'Password should be minimum of 6 characters and should contain atleast one number, one uppercase character and one special character'
        );

      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkGradYear = (value, test) => {
    if (value === 0) {
      if (!test) handleSetErrors('graduationYearError', 'Please select a year');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkCollege = (value, test) => {
    if (value.length === 0) {
      if (!test) handleSetErrors('collegeError', 'Enter college name');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkDegree = (value, test) => {
    if (value === '') {
      if (!test) handleSetErrors('degreeError', 'Select a degree');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkMajor = (value, test) => {
    if (value === '') {
      if (!test) handleSetErrors('majorError', 'Enter a major');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkUsername = (value, test) => {
    if (value.length < 6) {
      if (!test)
        handleSetErrors(
          'usernameError',
          'Username should be minimum 6 characters'
        );
      return false;
    }
    if (!/^[a-z0-9_\.]+$/.test(value)) {
      if (!test)
        handleSetErrors(
          'usernameError',
          'Username can contain characters from a-z and 0-9 and no special characters except underscore and dot '
        );
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkAltEmail = (value, test) => {
    if (value.length > 0) {
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        if (!test) handleSetErrors('altEmailError', 'Enter a valid email');
        return false;
      }
    } else if (!test) handleSetErrors('altEmailError', '');
    if (!test) resetErrors();
    return true;
  };
  // /////////////////////////////////////////////

  const handleErrors = (field, value) => {
    switch (steps) {
      case 1:
        switch (field) {
          case 'name':
            checkName(value);
            break;
          case 'email':
            checkEmail(value);
            break;
          case 'password':
            checkPassword(value);
            break;
          default:
            break;
        }
        break;
      case 3:
        switch (field) {
          case 'graduationYear':
            checkGradYear(value);
            break;
          case 'college':
            checkCollege(value);
            break;
          case 'degree':
            checkDegree(value);
            break;
          case 'major':
            checkMajor(value);
            break;
          default:
            break;
        }
        break;
      case 4:
        switch (field) {
          case 'username':
            checkUsername(value);
            break;
          case 'alternateEmail':
            checkAltEmail(value);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const checkErrorsExist = (exists) => {
    switch (steps) {
      case 1:
        if (
          checkName(name, true) &&
          checkEmail(email, true) &&
          checkPassword(password, true)
        ) {
          setValidation(true);
        } else {
          setValidation(false);
        }
        break;
      case 3:
        if (
          checkCollege(college, true) &&
          checkDegree(degree, true) &&
          checkGradYear(graduationYear, true) &&
          checkMajor(major, true)
        ) {
          setValidation(true);
        } else {
          setValidation(false);
        }
        break;
      case 4:
        if (
          checkUsername(username, true) &&
          checkAltEmail(alternateEmail, true) &&
          (exists || usernameAvail)
        ) {
          setValidation(true);
        } else {
          setValidation(false);
        }
        break;
      case 5:
        if (intrestedRoles.length >= 2) {
          setValidation(true);
          handleSetErrors('rolesError', '');
        } else {
          setValidation(false);
          handleSetErrors('rolesError', 'Please select atleast 2 roles');
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };

  const reSendOTP = () => {
    setOtp((f) => ({ ...f, isEnabled: false }));
    import('../../utils/apis/auth').then(({ requestOtp }) =>
      requestOtp(email, 'confirmEmail ')
        .then(() => {
          document.getElementById('otp').focus();
          setOtp((f) => ({ ...f, isEnabled: true }));
        })
        .catch(() => {
          setOtp({ isEnabled: false, otpData: '' });
          setSteps(7);
        })
    );
  };
  useEffect(() => checkErrorsExist(), [data, steps]);
  useEffect(() => {
    setValidation(false);
    let timeoutId = null;
    if (checkEmail(email, true)) {
      handleSetErrors('emailLoad', 'Validating Email');
    } else {
      handleSetErrors('emailLoad', '');
    }

    if (email.length > 0 && checkEmail(email, true)) {
      timeoutId = setTimeout(
        () => {
          import('../../utils/apis/auth').then(({ emailAvail }) => {
            emailAvail(email)
              .then(() => {
                handleSetErrors('emailLoad', 'Email Validated');
                checkErrorsExist();
              })
              .catch(() => {
                handleSetErrors('emailError', 'Email exists!, Please Login');
                handleSetErrors('emailLoad', '');
                handleSetErrors('validated', false);
              });
          });
        },

        2000
      );
    }
    return () => clearTimeout(timeoutId);
  }, [email]);

  useEffect(() => {
    handleSetErrors('usernameAvail', false);
    handleSetErrors('validated', false);
    if (checkUsername(username, true)) {
      handleSetErrors('usernameLoad', 'Checking for username');
    } else {
      handleSetErrors('usernameLoad', '');
    }
    let timeoutId = null;
    if (username.length > 0 && checkUsername(username, true)) {
      timeoutId = setTimeout( 
        () => {
          import('../../utils/apis/auth').then(({ usernameAvailable }) => {
            usernameAvailable(username)
              .then(() => {
                handleSetErrors('usernameLoad', 'Username available');
                handleSetErrors('usernameError', '');
                handleSetErrors('usernameAvail', true);
                checkErrorsExist(true);
              })
              .catch(() => {
                handleSetErrors('usernameLoad', '');
                handleSetErrors('usernameError', 'Username is already taken');
                handleSetErrors('validated', false);
                handleSetErrors('usernameAvail', false);
              });
          });
        },

        2000
      );
    }
    return () => clearTimeout(timeoutId);
  }, [username]);

  return (
    <Backdrop>
      <div
        className="max-w-5xl h-11/12  container m-auto bg-white rounded-xl relative flex overflow-y-hidden"
        style={{ maxHeight: '49rem' }}
      >
        <button
          type="button"
          className="absolute top-5 right-5"
          onClick={handleClose}
        >
          <img
            src="/svg/close.svg"
            width={32}
            height={32}
            alt="close signup"
            className="h-8 opacity-50"
          />
        </button>
        <div
          className="flex flex-col w-80.1 md:w-full justify-center rounded-l-xl !bg-bottom !bg-contain !bg-no-repeat"
          style={{
            background: '#eff2f6',
            maxWidth: '20.938rem ',
            backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
          }}
        >
          <div className="px-10 pt-10">
            <h6
              className="text-2xl font-semibold my-6"
              style={{ lineHeight: '1.875rem' }}
            >
              Create Your Profile
            </h6>
            <p
              className="text-sm mb-4"
              style={{ color: '#788699', marginTop: '.7rem' }}
            >
              Share your story here.
            </p>
          </div>
        </div>
        <div className="py-6 px-4 md:px-20 flex-grow overflow-y-auto">
          <div className="pt-8" style={{ color: '#141820' }}>
            <div
              className={classNames(
                'mt-10 flex items-center',
                steps === 1 && 'hidden',
                steps === 8 ? 'justify-center' : 'justify-between'
              )}
            >
              <button
                onClick={() => handleSteps(steps - 1)}
                type="button"
                className={classNames(steps === 8 && 'hidden')}
              >
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
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 1 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 1 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 2 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 3 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 4 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 5 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 6 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
                    steps > 7 ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
              </div>
              <button
                type="button"
                className={classNames(
                  'py-2 px-8 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed',
                  steps > 6 && 'hidden'
                )}
                disabled={!validated}
                onClick={() => handleSteps(steps + 1)}
              >
                Next
              </button>
              <button
                type="button"
                className={classNames(
                  'py-2 px-8 bg-signup-blue text-white rounded-md text-sm font-medium',
                  steps !== 7 && 'hidden'
                )}
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
            <form
              className={classNames('block w-full', steps === 8 && 'hidden')}
            >
              <button
                type="button"
                className={classNames(
                  'md:font-semibold w-full flex justify-center items-center border border-signup-blue rounded-sm mt-4 px-3 py-2.5 text-sm text-signup-blue',
                  steps !== 1 && 'hidden'
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
                className={classNames(
                  'flex justify-between mb-3.8',
                  steps !== 1 && 'hidden'
                )}
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
              <div className={classNames(steps !== 1 && 'hidden')}>
                <Input
                  label="Your Full Name"
                  name="name"
                  handleChange={handleChange}
                  value={name}
                  placeholder="Enter Your Full Name"
                  type="text"
                  inputProps={{ minLength: 5, maxLength: 40 }}
                />
                {fNameError && <InputError error={fNameError} />}
                <Input
                  label="Your Email Address"
                  name="email"
                  handleChange={handleChange}
                  value={email}
                  placeholder="Enter Email Address"
                  type="email"
                />
                {emailLoad && (
                  <InputMessage
                    message={emailLoad}
                    loading={emailLoad === 'Validating Email'}
                  />
                )}
                {emailError && <InputError error={emailError} />}
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
                  onChange={handleChange}
                  value={password}
                  className="rounded-md mb-2.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-focus-cyan"
                />
                <button
                  type="button"
                  className="opacity-70 inline-block -mb-1 -ml-8"
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
                {passwordError && <InputError error={passwordError} />}
              </div>
              <div className={classNames('mt-8', steps !== 2 && 'hidden')}>
                <Location
                  currentTimezone={timeZone}
                  setCurrentTimezone={setCurrentTimezone}
                  countrySelected={location}
                  setCountrySelected={setCountrySelected}
                />
              </div>
              {/* *********Graduation************* */}
              <div className={classNames('mt-8', steps !== 3 && 'hidden')}>
                <Input
                  label="College"
                  name="college"
                  handleChange={handleChange}
                  value={college}
                  placeholder="Enter College Name"
                  type="text"
                />
                {collegeError && <InputError error={collegeError} />}
                <div className="flex items-center">
                  <div>
                    <label
                      className="my-2.5 font-semibold leading-relaxed block text-sm"
                      style={{
                        color: '#201e27',
                      }}
                    >
                      Graduation Year
                    </label>
                    <select
                      placeholder="Graduation Year"
                      name="graduationYear"
                      style={{
                        lineHeight: 1.15,
                        width: '201px',
                      }}
                      value={graduationYear}
                      onChange={handleChange}
                      className="rounded-md mb-2.5 border text-sm p-2.5 outline-none focus:border-2 focus:border-focus-cyan"
                    >
                      <option value={0}>Graduation Year</option>
                      <option value={2015}>2015</option>
                      <option value={2016}>2016</option>
                      <option value={2017}>2017</option>
                      <option value={2018}>2018</option>
                      <option value={2019}>2019</option>
                      <option value={2020}>2020</option>
                      <option value={2021}>2021</option>
                      <option value={2022}>2022</option>
                      <option value={2023}>2023</option>
                      <option value={2024}>2024</option>
                      <option value={2025}>2025</option>
                    </select>
                    {graduationYearError && (
                      <InputError error={graduationYearError} />
                    )}
                  </div>
                  <div
                    style={{
                      marginLeft: '12%',
                    }}
                    className="w-3/5"
                  >
                    <label
                      className="my-2.5 w-full  font-semibold leading-relaxed block text-sm"
                      style={{ color: '#201e27' }}
                    >
                      Degree
                    </label>
                    <select
                      placeholder="Degree"
                      name="degree"
                      value={degree}
                      onChange={handleChange}
                      style={{ lineHeight: '1.15rem' }}
                      className="rounded-md mb-2.5 border w-full text-sm p-3 outline-none focus:border-2 focus:border-focus-cyan"
                    >
                      <option value="">Select Degree Name</option>
                      <option value="BTech">BTech</option>
                      <option value="BSc">BSc</option>
                      <option value="BBA">BBA</option>
                      <option value="BA">BA</option>
                      <option value="Bcom">Bcom</option>
                      <option value="BCA">BCA</option>
                      <option value="BFA">BFA</option>
                      <option value="BE">BE</option>
                    </select>
                    {degreeError && <InputError error={degreeError} />}
                  </div>
                </div>
                <Input
                  label="Major"
                  name="major"
                  handleChange={handleChange}
                  value={major}
                  placeholder="Enter Major Name"
                  type="text"
                />
                {majorError && <InputError error={majorError} />}
              </div>
              <div className={classNames('mt-8', steps !== 4 && 'hidden')}>
                <Input
                  label="User Name"
                  name="username"
                  handleChange={handleChange}
                  value={username}
                  placeholder="Enter Username"
                  type="text"
                />
                {usernameLoad && (
                  <InputMessage
                    message={usernameLoad}
                    loading={usernameLoad === 'Checking for username'}
                  />
                )}
                {usernameError && <InputError error={usernameError} />}
                <Input
                  label="Alternate Email"
                  name="alternateEmail"
                  handleChange={handleChange}
                  value={alternateEmail}
                  placeholder="Enter Alternate Email"
                  type="text"
                />
                {altEmailError && <InputError error={altEmailError} />}
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
                      onChange={(num) => setData({ ...data, mobileNo: num })}
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
                      onChange={(num) => setData({ ...data, altMobileNo: num })}
                      countryCodeEditable={false}
                      placeholder="99999 99999"
                      inputStyle={{ width: '100%' }}
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <label className="text-sm font-semibold mb-2" htmlFor="about">
                    About Me
                  </label>
                  <textarea
                    rows={10}
                    className="text-sm border rounded-md outline-none py-2 px-4 text-gray-600
                    focus:border-blue-700 transition duration-200 ease-out resize-none"
                    name="about"
                    value={about}
                    onChange={handleChange}
                  />
                </div>
                {majorError && <InputError error={majorError} />}
              </div>
              <div className={classNames('mt-8', steps !== 5 && 'hidden')}>
                <Interests
                  error={rolesError}
                  roles={intrestedRoles}
                  setRoles={setIntrestedRoles}
                />
              </div>
              <div className={classNames('mt-8', steps !== 6 && 'hidden')}>
                <Experience
                  experience={experience}
                  setExperience={setExperience}
                />
              </div>
              <div className={classNames('mt-8', steps !== 7 && 'hidden')}>
                <Skills skills={skills} setSkills={setSkills} />
              </div>
              <div className={classNames('mt-8', steps !== 8 && 'hidden')}>
                <SocialMedia />
              </div>
              <button
                type="button"
                onClick={() => handleSteps(2)}
                className={classNames(
                  'bg-signup-blue disabled:cursor-not-allowed disabled:bg-opacity-50 mt-6 w-36 text-sm mx-auto mb-12 block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold',
                  steps !== 1 && 'hidden'
                )}
                disabled={!validated}
                style={{ lineHeight: '1.375rem' }}
              >
                Next
              </button>
            </form>

            <div
              className={classNames(
                'flex flex-col items-center justify-center',
                steps !== 8 && 'hidden'
              )}
              style={{ margin: '10% 20% 0', width: '60%' }}
            >
              <h5 className="font-bold text-xl text-center">
                We Need to Verify your Email
              </h5>
              <p className="mt-4 text-center text-base">
                We sent an OTP to the Email address you provided when you
                created your account. Verify your email to continue
              </p>
              <div className="w-80 mt-8">
                <Input type="text" label="Email" value={email} disabled />

                <Input
                  handleChange={handleOTP}
                  label="OTP"
                  name="otpData"
                  id="otp"
                  placeholder="Enter OTP"
                  type="number"
                  value={otpData}
                  disabled={!isEnabled}
                />
                {otpLoad && (
                  <InputMessage
                    message={otpLoad}
                    loading={otpLoad === 'Validating OTP'}
                  />
                )}
                {otpError && <InputError error={otpError} />}
              </div>
              <hr
                className="w-full my-4"
                style={{ backgroundColor: '#dfe3eb' }}
              />
              <p className="mt-4 text-center text-base  ">
                click on the link in the email to verify your account. You may
                need to check your <strong>spam</strong> folder
              </p>
              <button
                type="button"
                onClick={reSendOTP}
                className="bg-signup-blue disabled:cursor-default disabled:bg-opacity-50 text-sm mx-auto text-white px-3 py-2.5 rounded-md font-bold mt-10"
                style={{ lineHeight: '1.375rem' }}
              >
                Don&apos;t see it? Resend
              </button>
              <p className="text-center text-base">
                Not your account ?{' '}
                <span className="text-signup-blue font-semibold cursor-pointer">
                  Log Out
                </span>
              </p>
            </div>
            <div
              style={{ margin: '0 10%' }}
              className={classNames(steps !== 1 && 'hidden')}
            >
              <hr className="my-5 mx-auto" style={{ background: '#ebedf1' }} />
              <p
                className="mt-5 mb-4 text-center"
                style={{ fontSize: '15px', color: '#788699' }}
              >
                By signing up, you&apos;re agreeing to our{' '}
                <span className="text-signup-blue font-semibold cursor-pointer">
                  Terms of Use
                </span>
              </p>
              <p
                className="mt-5 mb-4 text-center"
                style={{ fontSize: '15px', color: '#788699' }}
              >
                Already have an account?{' '}
                <Link href="/login" passHref>
                  <span className="text-signup-blue font-semibold cursor-pointer">
                    Log In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default SignUp;
