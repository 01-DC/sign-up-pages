import React, { useEffect, useState } from 'react';
import Error from '../../components/common/InputError';
import classNames from '../../utils/constants/classNames';
import Input from './Input';
import InputMessage from '../../components/common/InputMessage';

import { useGlobalHomeContext } from '../../HomeContext';

const Interests = () => {
  const { email } = useGlobalHomeContext();

  const [otpData, setOtpData] = useState([]);
  const [otpLoad, setOtpLoad] = useState('');
  const [otpError, setOtpError] = useState('');

  useEffect(() => {
    if (otpData.length >= 6) {
      handleSetErrors('otpLoad', 'Validating OTP');
      setOtp((f) => ({ ...f, isEnabled: false }));
      import('../../utils/apis/auth').then(({ verifyOtp }) => {
        verifyOtp(otpData, email)
          .then((res) => {
            handleSetErrors('otpLoad', 'OTP Validated');
            window.location.replace(
              `${process.env.NEXT_PUBLIC_DASHBOARD_URL}?token=${res.headers.token}`
            );
          })
          .catch(() => {
            handleSetErrors('otpLoad', '');
            setOtp((f) => ({ ...f, isEnabled: true }));
            handleSetErrors('otpError', 'Invalid OTP !');
          });
      });
    } else {
      setOtpLoad('');
      //   handleSetErrors('otpLoad', '');
    }
  }, [otpData]);

  const handleOTP = (e) => {
    if (e.target.value.length <= 6) {
      setOtp((f) => ({ ...f, otpData: e.target.value }));
    }
    resetErrors();
  };

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
              className={classNames('mt-10 flex items-center justify-center')}
            >
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
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[60vh] overflow-y-auto pt-12">
          <div className="max-w-xl">
            <div
              className={classNames(
                'flex flex-col items-center justify-center'
              )}
            >
              <h5 className="text-xl font-bold text-center">
                We Need to Verify your Email
              </h5>
              <p className="mt-4 text-base text-center">
                We sent an OTP to the Email address you provided when you
                created your account. Verify your email to continue
              </p>
              <div className="w-full">
                <Input type="text" label="Email" value={email} disabled />

                <Input
                  handleChange={(e) => setOtpData(e.target.value)}
                  label="OTP"
                  name="otpData"
                  id="otp"
                  placeholder="Enter OTP"
                  type="number"
                />

                <InputMessage
                  message={otpLoad}
                  loading={otpLoad === 'Validating OTP'}
                />

                {otpError && <InputError error={otpError} />}
              </div>
              <hr
                className="w-full my-4"
                style={{ backgroundColor: '#dfe3eb' }}
              />
              <p className="mt-4 text-base text-center ">
                Click on the link in the email to verify your account. You may
                need to check your <strong>spam</strong> folder.
              </p>
              <button
                type="button"
                className="bg-signup-blue disabled:cursor-default disabled:bg-opacity-50 text-sm mx-auto text-white px-3 py-2.5 rounded-md font-bold mt-10"
                style={{ lineHeight: '1.375rem' }}
              >
                Don&apos;t see it? Resend
              </button>
              <p className="text-base text-center mt-2">
                Not your account ?{' '}
                <span className="font-semibold cursor-pointer text-signup-blue">
                  Log Out
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
