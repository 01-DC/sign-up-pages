import React from 'react';
import Link from 'next/link';

const ReferralButton = ({ text }) => (
  <Link href="/signup">
    <div className="mt-5 font-inter hover:bg-slate-700 bg-black hidden sm:block text-white rounded-[2rem]  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute px-[1.5rem]">
      {text}
    </div>
  </Link>
);

export default ReferralButton;
