import React from 'react';
import ReferralButton from '../components/ReferralButton';

const ReferralPage = () => (
  <div className="flex w-screen h-screen overflow-y-hidden bg-white">
    <div
      className="w-1/3 justify-center !bg-bottom !bg-contain !bg-no-repeat"
      style={{
        background: '#eff2f6',
        backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
      }}
    />
    <div className="w-2/3 self-center md:px-20 h-[60vh] overflow-y-auto">
      <div className="flex flex-col items-center max-w-xl m-4">
        <div>
          <div className="space-y-8 justify-start font-inter">
            <div className="leading-[1.3rem] text-[14px] tracking-[-0.015em] overflow-hidden">
              Hey, MetaDev is an exclusive invitation only web3 professional
              networking platform built for Developers.
            </div>
            <div className="leading-[1.3rem] text-[14px] tracking-[-0.015em] overflow-hidden">
              We&apos;re still opening up but anyone can join with an invite
              from an existing user! To join, an existing user has to send an
              invite and also give you access to join MetaDev. Sign up to see if
              you have collaborators on MetaDev who can let you in.
            </div>
            <div className="leading-[1.3rem] text-[14px] tracking-[-0.015em] ">
              We can&apos;t wait for you to join!
            </div>
          </div>

          <input
            className=" w-full overflow-hidden sm:w-[200px] leading-[1.3rem] text-[14px] mt-5 tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[15px] h-[43px] "
            type="email"
            name="email"
            placeholder="Invite Code"
          />
          <ReferralButton text="Unlock Access" />
        </div>
      </div>
    </div>
  </div>
);

export default ReferralPage;
