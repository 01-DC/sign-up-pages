import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Error from '../components/common/InputError';
import Input from '../modals/signup/Input';
import ForgotPassword from '../components/common/ForgotPassword';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    validated: false,
  });
  const { email, password } = formData;
  const { passwordError, emailError, validated } = errors;
  const resetErrors = () => {
    setErrors((f) => ({
      ...f,
      emailError: '',
      passwordError: '',
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    import('../utils/apis/auth').then(({ login }) => {
      login(formData)
        .then((res) =>{
          console.log(`resr==es::${JSON.stringify(res.headers)}`);
          window.location.replace(process.env.NEXT_PUBLIC_DASHBOARD_URL+`?token=${res.headers["token"]}`)
        }
        )
        .catch(() => {
          setErrors((f) => ({
            ...f,
            emailError: 'Email and password did not match',
          }));
        });
    });
  };
  const checkEmail = (value, test) => {
    if (value.length === 0) {
      if (!test)
        setErrors((f) => ({
          ...f,
          emailError: 'Email is required',
        }));
      return false;
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      if (!test)
        setErrors((f) => ({
          ...f,
          emailError: 'Not a valid email',
        }));
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkPassword = (value, test) => {
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)) {
      if (!test)
        setErrors((f) => ({
          ...f,
          passwordError:
            'Password should be minimum of 6 characters and should contain atleast one number, one uppercase character and one special character',
        }));
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const handleErrors = (field, value) => {
    switch (field) {
      case 'email':
        checkEmail(value);
        break;
      case 'password':
        checkPassword(value);
        break;
      default:
        break;
    }
  };
  const handleChange = (e) => {
    handleErrors(e.target.name, e.target.value);
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (checkPassword(password, true) && checkEmail(email, true)) {
      setErrors((f) => ({ ...f, validated: true }));
    } else {
      setErrors((f) => ({ ...f, validated: false }));
    }
  }, [formData]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      import('../utils/apis/auth').then(({ verifyToken }) => {
        verifyToken()
          .then(() =>
            window.location.replace(process.env.NEXT_PUBLIC_DASHBOARD_URL)
          )
          .catch(() => setLoading(false));
      });
    } else {
      setLoading(false);
    }
  }, []);
  return (
    !loading && (
      <div className="h-screen relative flex flex-col justify-center ">
        <div
          className="bg-cover bg-no-repeat blur-[2px] w-full h-full absolute z-10"
          style={{
            backgroundImage: 'url("/images/landing-page.png")',
            backgroundPosition: '100%',
          }}
        />

        <div className="max-w-5xl h-11/12  container m-auto bg-white shadow-xl rounded-xl z-20 max-h-[49rem] relative flex overflow-y-hidden">
          <div
            className="flex flex-col w-80.1 md:w-full bg-[#eff2f6] max-w-[20.938rem] justify-center rounded-l-xl !bg-bottom !bg-contain !bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
            }}
          >
            <div className="px-10 pt-10">
              <h6 className="text-2xl font-semibold my-6 leading-[1.875rem]">
                {forgetPass ? 'Forgot password ?' : 'Welcome Back'}
              </h6>
              <p className="text-sm mb-4 text-[#788699] mt-[.7rem]">
                {forgetPass ? 'Enter Email to continue.' : 'Login to continue.'}
              </p>
            </div>
          </div>
          <div className="py-6 px-4 w-full md:w-max md:px-20 flex-grow overflow-y-auto">
            <div className="pt-8 text-[#141820]">
              {forgetPass ? (
                <ForgotPassword handleClose={() => setForgetPass(false)} />
              ) : (
                <>
                  <div className="w-full">
                    <button
                      type="button"
                      className="md:font-semibold w-full flex justify-center items-center border border-signup-blue rounded-sm mt-4 px-3 py-2.5 text-sm text-signup-blue"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAMAAAClD0MEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGSUExURQAAAP+/AECA7zCfUN9AQN9AMPe/APe3CO+AIECH70CA7zCnUOdIMOdAOPq6BUCF9DWqUDWlVepFNepFMOpANfu7BPebEECD8zSnVDSnUOdENOtANPy+A0CE9fy8A0OD8jOmU+lDNulDMzapUzOpU+xDNulDNvq9A0KF8jKnUupCMjOqU+pDNfi7BUKE9DSoUjKmVDSpUutENOtCNvm7BEKD8zSnVOlENOlCNkKG9DSoUutENfq8Bfq8BEGD8zOmUzOmUehDNUKF9DOoU+pDNfq6BUGE8jOnU+lDNfu8BEKG8zeffzSpUzSnU+lDNkGF8/u8BUOE9EGF9DSoU+pDNepDNPu8BUGF9DSnUupENelCNfq9BUKF9ECK3UGF9DOoU+pDNelCNfu8BUKF9DSoUzOoU+tDNOpDNfu8Be66CeK5DvmtC9a4E8m3GPaWFKSzKPSHGpeyLPOAHYuxMfF4IHOuOu9pJlmrRE2qSUGpTkCK4EKF9D+M1kGH6j2StzmbjzuWozakZ+xSLzWmXTSoU+pDNcRMx+0AAABodFJOUwAQEBAQECAgICAgICAgMDAwMDAwMEBAQEBAQEBPT1BQUFBQX19fX2BgYGBvb3BwcHB/f3+AgICAgI+Pj5CQkJCQkJ+fn6CgoKCvr6+vr6+wv7+/v7+/z8/Pz8/f39/f39/f7+/v7+/vEvGb2gAAAi1JREFUeNrN1elf0zAYB/DHTVRkU1Fx3TxRJ6ICTgW85wTcxGu6TUUGHSoziveNUYGZ/N9+2tE2ydI07ccX/t416XdPzhXgP0jXicLdRpNS2pypFrK7NdHZKuXTmAyme0XUTjWrVLvkyi66UzFCqsqlLjlLzFB1GgnpzJo0KC8Od7Is1UjpX7H+aCzRjMSgIb5TG88kAWBj5lRNwc4IajLDdCZLfizBqycZoT9ZkzIocawgeWNcxvZ8Ztl57ds2hd5HYZsQQkstZ0X0L/cQsuBXmy0k9d1DZOej5Y5BqGHaeduiCyH+gw44Di21QpSDK8jLFr5r+6hfDgKUPVYWfvI49ss9d1msXNZ2dYCnnhsK45jp7dN2mHN9EV2oesz8BsK42SjriQFuRtm/On9eNui6+wADrnr5ZYR33SkuDzx3FWCzw15/JxXlSa57bhjchXm3TAgxFCzFjDMFAOfsMX4iVsy4v7vhsWfW8zaE0KtvpJ2LvqybKXfdbimjN8vEyYgPizGzw/vtpr4PhMkRuZtm2Px6W4V1JCerxjJ8Yb3V4ByZ6BFZeo7b9a1Oe56Hz3OcTBfJ2k+Gjbo9cZMIuX10R7snnWvPYrVjdlZ6iSSmaS56Tyu/mD13c5oEZu2HMEo7Y8Hwz2+M8bS4ZhqQrOJHsY490hgquRWTbG6vGcTy8rPUU1SqxUO+h35QUTIfV11qPzlhBH3YjGIHrYzFtb6Jxsk7j51DU7k2KEN/AZeF7avEtSekAAAAAElFTkSuQmCC"
                        alt="google signin"
                        className="h-4 mr-3"
                      />
                      <p className="text-[15px]">Continue with Google</p>
                    </button>
                    <div
                      className="flex justify-between mb-3.8 mt-[1.1625rem]"
                      style={{ marginTop: '1.1625rem' }}
                    >
                      <hr className="w-full my-4 bg-[#dfe3eb]" />
                      <p className="mx-2.5 mb-4 text-base antialiased">or</p>
                      <hr className="w-full my-4 bg-[#dfe3eb]" />
                    </div>
                    <form onSubmit={onSubmit}>
                      <Input
                        label="Email"
                        name="email"
                        handleChange={handleChange}
                        value={email}
                        required
                        placeholder="Enter Email"
                        type="text"
                      />
                      {emailError && <Error error={emailError} />}
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
                        required
                        className="rounded-md mb-2.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-focus-cyan"
                      />
                      <button
                        className="opacity-70 inline-block -mb-1 cursor-pointer -ml-8"
                        type="button"
                        onClick={() => setPasswordToggle(!passwordToggle)}
                      >
                        <img
                          alt="Password toggle"
                          src={
                            passwordToggle
                              ? '/svg/password-eye-unhide.svg'
                              : '/svg/password-eye.svg'
                          }
                          width={20}
                          height={20}
                        />
                      </button>
                      {passwordError && <Error error={passwordError} />}

                      <button
                        type="submit"
                        disabled={!validated}
                        className="bg-signup-blue mt-[1.55rem] mx-auto mb-12 w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                  <div className="my-0 mx-[10%]">
                    <hr className="my-5 mx-auto bg-[#ebedf1]" />
                    <p className="mt-5 mb-4 text-center text-[15px] text-[#788699]">
                      Don’t have an account?{' '}
                      <Link href="/?signup" passHref>
                        <span className="text-signup-blue font-semibold cursor-pointer">
                          Sign Up
                        </span>
                      </Link>
                    </p>
                    <p className="mt-5 mb-4 text-center text-[15px] text-[#788699]">
                      Forgot your password?{' '}
                      <button
                        onClick={() => setForgetPass(true)}
                        type="button"
                        className="text-signup-blue font-semibold"
                      >
                        Recover password
                      </button>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
