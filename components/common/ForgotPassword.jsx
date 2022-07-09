import React, { useEffect, useState } from 'react';
import Input from '../../modals/signup/Input';
import classNames from '../../utils/constants/classNames';
import Error from './InputError';
import InputMessage from './InputMessage';

const ForgotPassword = ({ handleClose }) => {
  const [steps, setSteps] = useState(1);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [data, setData] = useState({
    password: '',
    comfirmPassword: '',
    otp: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    cPassError: '',
    otpError: '',
    validated: false,
    otpLoad: '',
    emailLoad: '',
    isEnabled: false,
  });

  const {
    cPassError,
    emailError,
    otpError,
    passwordError,
    validated,
    emailLoad,
    otpLoad,
    isEnabled,
  } = errors;
  const { comfirmPassword, email, otp, password } = data;
  const handleSetError = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));

  const handleResetErrors = () =>
    setErrors((f) => ({
      ...f,
      emailError: '',
      passwordError: '',
      cPassError: '',
      otpError: '',
    }));
  const handleSteps = (page) => {
    if (page === 0) {
      return handleClose();
    }
    handleSetError('validated', false);
    return setSteps(page);
  };
  const handleChange = (e) => {
    handleErrors(e.target.name, e.target.value);
    setData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const checkEmail = (value, test) => {
    if (value.length === 0) {
      if (!test) handleSetError('emailError', 'Email is required');
      return false;
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      if (!test) handleSetError('emailError', 'Enter a valid Email');
      return false;
    }
    if (!test) handleResetErrors();
    return true;
  };
  const checkPassword = (value, test) => {
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)) {
      if (!test)
        handleSetError(
          'passwordError',
          'Password should be minimum of 6 characters and should contain atleast one number, one uppercase character and one special character'
        );

      return false;
    }
    if (!test) handleResetErrors();
    return true;
  };
  const checkCPassword = (value, test) => {
    if (password !== value) {
      if (!test) handleSetError('cPassError', 'Passwords do not match');
      return false;
    }
    if (!test) handleResetErrors();
    return true;
  };
  const handleErrors = (name, value) => {
    switch (steps) {
      case 1:
        checkEmail(value);
        break;
      case 2:
        switch (name) {
          case 'password':
            checkPassword(value);
            break;
          case 'comfirmPassword':
            checkCPassword(value);
            break;
          default:
            break;
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (steps === 1) {
      if (checkEmail(email, true)) {
        handleSetError('validated', true);
      } else {
        handleSetError('validated', false);
      }
    }
    if (steps === 2) {
      if (
        checkPassword(password, true) &&
        checkCPassword(comfirmPassword, true)
      ) {
        handleSetError('validated', true);
      } else {
        handleSetError('validated', false);
      }
    }
  }, [steps, data]);

  const handleResetPassword = () => {
    handleSetError('otpLoad', 'Validating OTP');
    handleSetError('isEnabled', false);
    import('../../utils/apis/auth').then(({ resetPassword }) => {
      resetPassword(email, otp, password)
        .then((res) => {
          handleSetError('otpLoad', 'Password have been successfully changed');
          window.location.replace(process.env.NEXT_PUBLIC_DASHBOARD_URL+`?token=${res.headers["token"]}`);
        })
        .catch(() => {
          handleSetError('otpLoad', '');
          handleSetError('isEnabled', true);
          handleSetError('otpError', 'Invalid OTP');
        });
    });
  };

  const handleSendOTP = () => {
    handleResetErrors();
    handleSetError('isEnabled', false);
    handleSetError('emailLoad', 'Sending OTP to email');
    import('../../utils/apis/auth').then(({ requestOtp }) => {
      requestOtp(email, 'passwordReset')
        .then(() => {
          handleSetError('emailLoad', '');
          handleSetError('otpLoad', 'OTP Sent to email');
          handleSetError('isEnabled', true);
          handleSteps(2);
        })
        .catch(() => {
          handleSetError('emailLoad', '');
          handleSetError('emailError', 'Email not found');
          handleSetError('isEnabled', false);
          handleSetError('otpError', 'Could not send OTP');
        });
    });
  };

  return (
    <div>
      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={() => handleSteps(steps - 1)}
          type="button"
          className={classNames(steps === 2 && 'invisible')}
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
              steps > 0 ? 'bg-blue-500' : 'bg-gray-200'
            )}
          />
          <div
            className={classNames(
              'h-1 w-6 rounded-md mr-1.5 cursor-pointer',
              steps > 1 ? 'bg-blue-500' : 'bg-gray-200'
            )}
          />
        </div>
        <div className="invisible" />
      </div>
      <div className="mt-4">
        <div
          className={classNames(
            'flex flex-col items-center justify-center !mb-6 mx-auto',
            steps > 1 && 'hidden'
          )}
          style={{ width: '90%' }}
        >
          <h5 className="font-bold text-xl text-center mt-6">
            Enter your Email
          </h5>
          <p className="mt-4 text-center text-base">
            We will send an OTP to the Email address you provided when you
            created your account. Enter the OTP in next step to change password
          </p>
          <div className="mt-6 w-full">
            <Input
              value={email}
              label="Enter Email"
              placeholder="Enter your Email"
              handleChange={handleChange}
              name="email"
            />
            {emailLoad && (
              <InputMessage
                message={emailLoad}
                loading={emailLoad === 'Sending OTP to email'}
              />
            )}
            {emailError && <Error error={emailError} />}
            <button
              type="button"
              onClick={handleSendOTP}
              className="bg-signup-blue disabled:cursor-not-allowed disabled:bg-opacity-50 mt-8 w-36 text-sm mx-auto mb-12 block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
              disabled={!validated}
              style={{ lineHeight: '1.375rem' }}
            >
              Send OTP
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'flex flex-col items-center justify-center !mb-6 mx-auto',
            steps < 2 && 'hidden'
          )}
          style={{ width: '90%' }}
        >
          <h5 className="font-bold text-xl text-center mt-6">
            Comfirm Password
          </h5>
          <p className="mt-4 text-center text-base">
            We sent an OTP to the Email address you provided when you created.
            Enter the OTP and reset your password
          </p>
          <div className="mt-6 w-full">
            <Input
              handleChange={handleChange}
              label="OTP"
              name="otp"
              id="otp"
              placeholder="Enter OTP"
              type="number"
              value={otp}
            />
            {otpLoad && (
              <InputMessage
                message={otpLoad}
                loading={otpLoad === 'Validating OTP'}
              />
            )}
            {otpError && <Error error={otpError} />}

            <div>
              <label
                className="my-2.5 font-semibold leading-relaxed block text-sm"
                style={{ color: '#201e27' }}
              >
                New Password
              </label>
              <input
                placeholder="Enter New Password"
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
              {passwordError && <Error error={passwordError} />}
            </div>
            <div>
              <label
                className="my-2.5 font-semibold leading-relaxed block text-sm"
                style={{ color: '#201e27' }}
              >
                Confirm Password
              </label>
              <input
                placeholder="Confirm Password"
                name="comfirmPassword"
                type={passwordToggle ? 'text' : 'password'}
                style={{ lineHeight: 1.15 }}
                onChange={handleChange}
                value={comfirmPassword}
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
              {cPassError && <Error error={cPassError} />}
            </div>
            <button
              type="button"
              onClick={handleResetPassword}
              className="bg-signup-blue disabled:cursor-not-allowed disabled:bg-opacity-50 mt-8 w-36 text-sm mx-auto mb-12 block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
              disabled={!validated}
              style={{ lineHeight: '1.375rem' }}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
