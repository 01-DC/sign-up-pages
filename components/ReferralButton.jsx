import React from 'react';
import { useRouter } from 'next/router';

const ReferralButton = ({ text }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.replace('/signup')}
      className="mt-5 font-inter hover:bg-slate-700 bg-black hidden sm:block text-white rounded-[2rem]  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute px-[1.5rem]"
    >
      {text}
    </div>
  );
};

export default ReferralButton;
