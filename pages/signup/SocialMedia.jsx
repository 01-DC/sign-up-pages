import React from 'react';

const SocialMedia = () => (
  <div className="">
    <div className="flex flex-col mb-5">
      <label htmlFor="linkedin" className="text-xsm font-semibold mb-1">
        Linkedin URL{' '}
        <span className="text-gray-400 font-medium">(optional)</span>
      </label>
      <input
        type="text"
        name="linkedin"
        id="linkedin"
        className="outline-none border rounded-md h-10 text-xsm pl-4"
        placeholder="https://www.scholary-science.com"
        //   value=""
        //   onChange={(e) => {}}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="github" className="text-xsm font-semibold mb-1">
        Github URL <span className="text-gray-400 font-medium">(optional)</span>
      </label>
      <input
        type="text"
        name="github"
        id="github"
        className="outline-none border rounded-md h-10 text-xsm pl-4"
        placeholder="https://www.scholary-science.git"
        //   value=""
        //   onChange={(e) => {}}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="lineId" className="text-xsm font-semibold mb-1">
        Line ID <span className="text-gray-400 font-medium">(optional)</span>
      </label>
      <input
        type="text"
        name="lineId"
        id="lineId"
        className="outline-none border rounded-md h-10 text-xsm pl-4"
        placeholder="Worked on something you loved add a link"
        //   value=""
        //   onChange={(e) => {}}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="weChatId" className="text-xsm font-semibold mb-1">
        WeChat ID <span className="text-gray-400 font-medium">(optional)</span>
      </label>
      <input
        type="text"
        name="weChatId"
        id="weChatId"
        className="outline-none border rounded-md h-10 text-xsm pl-4"
        placeholder="https://www.scholarly-science.com"
        //   value=""
        //   onChange={(e) => {}}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="personalWebsite" className="text-xsm font-semibold mb-1">
        Personal Website{' '}
        <span className="text-gray-400 font-medium">(optional)</span>
      </label>
      <input
        type="text"
        name="personalWebsite"
        id="personalWebsite"
        className="outline-none border rounded-md h-10 text-xsm pl-4"
        placeholder="https://www.scholarly-science.com"
        //   value=""
        //   onChange={(e) => {}}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="passionProjects" className="text-xsm font-semibold mb-1">
        Passion Projects{' '}
        <span className="text-gray-400 font-medium">(optional)</span>
      </label>
      <input
        type="text"
        name="passionProjects"
        id="passionProjects"
        className="outline-none border rounded-md h-10 text-xsm pl-4"
        placeholder="Worked on something you loved add a link"
        //   value=""
        //   onChange={(e) => {}}
      />
    </div>
  </div>
);

export default SocialMedia;
