/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => (
  <div
    className="flex pt-10 pb-0 justify-center border border-solid border-gray-100 bg-white text-base text-black font-Inter"
    style={{ textTransform: 'none', lineHeight: '1.6em' }}
  >
    <div className="w-footer-width pr-4 pl-4">
      <div className="flex mb-10 justify-between flex-wrap">
        <div
          className="flex flex-col flex-grow-0"
          style={{ flexShrink: 'auto' }}
        >
          <img
            src="/images/elementlogo.png"
            alt="logo"
            className="w-10 inline-block max-w-full border-0"
            style={{ verticalAlign: 'middle' }}
          />
        </div>
      </div>

      <div className="flex justify-between mb-7 flex-wrap ">
        <div className="flex flex-col w-44 mb-4">
          <h4
            style={{ marginBottom: '1em', lineHeight: '1.2em' }}
            className="text-xl font-semibold text-left mt-2 "
          >
            Products
          </h4>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Element
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Element Home
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Element Matrix Services
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Element App Store
          </a>
        </div>
        <div className="flex flex-col w-44 mb-4">
          <h4
            style={{ marginBottom: '1em', lineHeight: '1.2em' }}
            className="text-xl font-semibold text-left mt-2"
          >
            Why Element
          </h4>
          <a
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Personal
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Communities
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Business
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Public Sector
          </a>
        </div>
        <div className="flex flex-col w-44 mb-4">
          <h4
            style={{ marginBottom: '1em', lineHeight: '1.2em' }}
            className="text-xl font-semibold text-left mt-2"
          >
            Plans&nbsp;&amp;&nbsp;Pricing
          </h4>
          <a
            href="#"
            style={{
              marginBottom: '0.7em',
            }}
            className="text-left no-underline leading-leading-nav"
          >
            Pricing
          </a>
          <a
            href="#"
            style={{
              marginBottom: '0.7em',
            }}
            className="text-left no-underline leading-leading-nav"
          >
            Contact Sales
          </a>
        </div>
        <div className="flex flex-col w-44 mb-4">
          <h4
            style={{ marginBottom: '1em', lineHeight: '1.2em' }}
            className="text-xl font-semibold text-left mt-2"
          >
            About
          </h4>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Company
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Careers
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Open&nbsp;Source
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-col w-44 mb-4">
          <h4
            style={{ marginBottom: '1em', lineHeight: '1.2em' }}
            className="text-xl font-semibold text-left mt-2"
          >
            Resources
          </h4>
          <a
            href="#"
            style={{
              marginBottom: '0.7em',
            }}
            className="text-left no-underline leading-leading-nav"
          >
            Blog
          </a>
          <a
            href="#"
            style={{
              marginBottom: '0.7em',
            }}
            className="text-left no-underline leading-leading-nav"
          >
            Help
          </a>
          <a
            href="#"
            style={{
              marginBottom: '0.7em',
            }}
            className="text-left no-underline leading-leading-nav"
          >
            Case Studies
          </a>
          <a
            href="#"
            style={{
              marginBottom: '0.7em',
            }}
            className="text-left no-underline leading-leading-nav"
          >
            Public Roadmap
          </a>
        </div>
        <div className="flex flex-col w-44 mb-4">
          <h4
            style={{ marginBottom: '1em', lineHeight: '1.2em' }}
            className="text-xl font-semibold text-left mt-2"
          >
            Get Started
          </h4>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Web
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            iOS
          </a>
          <a
            href="#"
            style={{ marginBottom: '0.7em' }}
            className="text-left no-underline leading-leading-nav"
          >
            Android
          </a>
        </div>
      </div>
      <div className="mb-5 pt-14 border-t border-solid border-gray-200 flex justify-between flex-wrap md-max:w-full md-max:block">
        <div style={{ flex: '0 65%' }} className="flex flex-col md-max:w-full">
          <h4
            className="text-xl text-left font-semibold"
            style={{ lineHeight: '1.2em', marginBottom: '1em' }}
          >
            Our mission is to preserve your right to privacy, in the face of an
            increasingly centralised internet, and routine surveillance.
          </h4>
          <p
            className="mb-0 text-left text-#626262 text-lg mt-0"
            style={{ lineHeight: '1.6em', maxWidth: '720px' }}
          >
            Privacy is protected by the UN Declaration of Human Rights
          </p>
        </div>
        <div className="flex flex-col">
          <div
            className="flex mb-2 md-max:mr-auto md-max:mt-5"
            style={{ alignSelf: 'flex-end' }}
          >
            <a
              href="https://twitter.com/"
              target="_blank"
              className="ml-5 max-w-full inline-block md-max:ml-0 no-underline leading-leading-nav"
              rel="noreferrer"
            >
              <img
                src="/svg/twitter.svg"
                alt=""
                className="h-7 w-7 rounded-none opacity-60 max-w-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="ml-5 max-w-full inline-block no-underline leading-leading-nav"
              rel="noreferrer"
            >
              <img
                src="/svg/linkedin.svg"
                alt=""
                className="h-7 w-7 rounded-none opacity-50 max-w-full"
              />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="ml-5 max-w-full inline-block no-underline leading-leading-nav"
              rel="noreferrer"
            >
              <img
                src="/svg/github.svg"
                alt=""
                className="h-7 w-7 rounded-none opacity-60 max-w-full"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-10 flex-wrap md-max:block ">
        <div className="md-max:text-center">
          <p
            className="text-#626262 text-left md-max:text-center max-w-3xl text-lg mt-0 mb-0 block"
            style={{ lineHeight: '1.6em' }}
          >
            Element is proud to be a part of Marix.
          </p>
        </div>
        <div className="md-max:text-center">
          <p
            className="text-#626262 mb-0 md-max:text-center text-right max-w-3xl text-lg"
            style={{ lineHeight: '1.6em' }}
          >
            Copyright © 2021 Element •
            <a
              href="#"
              className="text-#626262 ml-1 no-underline leading-leading-nav "
            >
              Legal
            </a>
          </p>
          <p
            style={{ lineHeight: '1.6em' }}
            className="text-xs text-right md-max:text-center max-w-xs mb-0 text-#626262 md-max:mx-auto"
          >
            All Rights Reserved. The Element name, logo and device are
            registered trade marks of New Vector Ltd
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
