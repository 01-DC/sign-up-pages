/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// const bankofamerica = require('../../public/svg/bankofamerica.svg');
// const wellsfargo = require('../../public/svg/wellsfargo.svg');
// const captialone = require('../../public/svg/captialone.svg');
// const citi = require('../../public/svg/citi.svg');
// const td = require('../../public/svg/td.svg');
// const rbc = require('../../public/svg/rbc.svg');

const babylon = require('../../public/svg/babylon.svg');
const bank = require('../../public/svg/bank.svg');
const bykea = require('../../public/svg/bykea.svg');
const cabify = require('../../public/svg/cabify.svg');
const coupang = require('../../public/svg/coupang.svg');
const deliveryHero = require('../../public/svg/delivery-hero.svg');
const gogoro = require('../../public/svg/gogoro.svg');
const ifood = require('../../public/svg/ifood.svg');
const jumia = require('../../public/svg/jumia.svg');
const klarna = require('../../public/svg/klarna.svg');
const lalamove = require('../../public/svg/lalamove.svg');
const netflix = require('../../public/svg/netflix.svg');
const paytm = require('../../public/svg/paytm.svg');
const rappi = require('../../public/svg/rappi.svg');
const shopback = require('../../public/svg/shopback.svg');
const shopee = require('../../public/svg/shopee.svg');
const spotify = require('../../public/svg/spotify.svg');
const swvl = require('../../public/svg/swvl.svg');

const LandingPage = () => {
  // const bankImages = [bankofamerica, wellsfargo, captialone, citi, rbc, td];
  const [allCompanies, setAllCompanies] = useState([
    babylon,
    bank,
    bykea,
    cabify,
    coupang,
    deliveryHero,
    gogoro,
    ifood,
    jumia,
    klarna,
    lalamove,
    netflix,
    paytm,
    rappi,
    shopback,
    shopee,
    spotify,
    swvl,
  ]);

  const [CompanyImages, setCompanyImages] = useState([
    babylon,
    bank,
    bykea,
    cabify,
    coupang,
    deliveryHero,
    gogoro,
    ifood,
    jumia,
    klarna,
  ]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [loop, setLoop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAllCompanies((pre) => {
        pre.unshift(pre.pop());
        return pre;
      });
      setCompanyImages((prev) => {
        prev[loop] = allCompanies[allCompanies.length - 1];
        return prev;
      });
      setLoop((prev) => {
        if (prev === 9) return 0;
        prev += 1;
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [loop, allCompanies]);

  return (
    <div className="bg-white">
      <div
        style={{ backgroundImage: 'url("/images/landing-page.png")' }}
        className="border-0 bg-no-repeat bg-cover bg-100 h-[92vh] lg:h-[89vh] xl:h-[80vh] sm-mid-tablet:bg-bottom"
      >
        <div className="sm:grid sm:grid-cols-10 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12">
          <section className="col-span-6 lg:col-span-4 pt-[19%]">
            <h1 className="text-5xl tracking-tight leading-leading-first font-bold mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug">
              Bridging companies and campuses to
              <span className="text-purple-500"> empower students</span>
            </h1>
            <p className=" text-lg mb-8 mt-0">
              GradTheory is creating a future where it is exciting and fair to
              pursue your career in the ever-evolving world of technology.
            </p>
          </section>
        </div>
      </div>
      <div
        className=" text-center pt-28 pb-16 sm-mid-tablet:pt-16 overflow-x-hidden"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <h3
          className="leading-first md:text-sec md:leading-sec font-body mb-8 font-semibold "
          style={{
            fontSize: 'calc(1.425rem + 1vw)',
            fontWeight: '600',
          }}
        >
          They can be your future employers
        </h3>
        <div className="flex-wrap justify-center">
          <div className="mx-auto w-4/5 lg-max:w-full lg-max:pl-2">
            <div className="grid grid-cols-5 grid-rows-2 text-center flex-wrap mid-lg:grid-cols-2 mid-lg:grid-rows-4 mid-lg:w-11/12 mid-lg:mx-auto sm-mid-max:w-full">
              {CompanyImages.slice(0, 10).map((img, index) => (
                <div
                  key={index}
                  className="flex flex-wrap flex-grow-0 flex-shrink mb-12 text-center m-5 max-w-company-images max-h-company-images min-h-company-images min-w-company-images justify-center mid-lg:mx-auto"
                >
                  <Image
                    className={loop === index ? 'animation-fade' : null}
                    src={img}
                    alt="Company"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <div
        className="max-w-[850px] mx-auto bg-white pb-12 mt-16 ma"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <h3 className="text-4xl antialiased text-center font-semibold mb-6">
          Creating an ecosystem of opportunities
        </h3>
        <p className="text-lg mb-8 leading-[1.875rem] text-center">
          Recruiting is so broken in that it focuses so much on background
          information through resumes rather than the candidate’s actual
          abilities to perform on the job. That’s why millions of great
          candidates are not getting hired and are working multiple jobs to make
          ends meet while 72% of recruiters struggling to find qualified
          candidates.
        </p>
      </div>

      {/* SECTION 4 */}
      <div
        className="bg-[#fffaf5] mid-lg:block grid grid-cols-2  mt-18 py-16 pr-4"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <img
          src="/images/collaboration.png"
          alt="collabration"
          className="w-[95%] h-96 rounded-md"
        />
        <div className="ml-8 mid-lg:mt-8 mt-0">
          <h3 className="text-4xl antialiased font-semibold mb-6">
            Introducing GradTheory
          </h3>
          <p className="text-lg mb-8 leading-[1.875rem]">
            Recent graduates want great jobs. Companies want great talent.
            GradTheory enables collaboration between companies, universities and
            their students by creating an ecosystem of opportunities where
            students are rewarded with opportunities they deserve
          </p>
        </div>
      </div>
      <div className="h-96" />
      {/* 

      
      <div
        className="pb-32 pt-28 bg-white"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="sm:grid sm:grid-cols-10 sm:gap-12 md:gap-24 mx-auto max-w-screen-xl px-6 md:px-12 mid-lg:flex mid-lg:flex-wrap">
          <div className="col-span-6 lg:col-span-5 sm:pr-12">
            <h2
              className=" font-semibold tracking-tight mb-8"
              style={{
                lineHeight: '64px',
                fontSize: 'calc(1.425rem + 1vw)',
              }}
            >
              For students
            </h2>
            <p className="text-lg mb-6 ">
              We help candidates showcase their skills and experience to
              employers as a way to get hired.
            </p>
            <p className=" text-lg mb-4">
              Land an internship or entry-level job at cutting edge startups,
              leading tech companies or anything in between. Your career starts
              here.
            </p>
          </div>
          <aside className="col-start-8 lg:col-start-6 col-end-11 mt-8">
            <div className=" overflow-hidden right-0 absolute rounded-lg mid-lg:left-0 left-desktop-img mid-lg:w-4/5 mid-lg:h-3/4 mid-lg:mx-auto">
              <img
                style={{ verticalAlign: 'middle' }}
                src="/images/desktop2.jpg"
                alt="Monthly budget showing a balance"
                className="border-0 max-w-3xl max-h-7xl"
              />
            </div>
            <div className="bg-transparent justify-self-stretch h-desktop-img-height" />
          </aside>
        </div>
      </div>

      <div
        className="bg-white h-screen mt-24 lg-max:mb-40 lg:mb-28"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="sm:grid sm:grid-cols-12  sm:gap-3 md:gap-6 px-6 md:px-12 bg-white mid-lg:flex mid-lg:flex-wrap">
          <section className="col-start-8 col-end-12 row-start-2 z-10">
            <article className="sm:pt-16 pb-4">
              <h2
                className="text-first leading-first md:text-sec md:leading-sec  font-body font-semibold mb-8 heading"
                style={{
                  fontSize: 'calc(1.425rem + 1vw)',
                  fontWeight: '600',
                }}
              >
                For colleges
              </h2>
              <p className="text-lg mb-6">
                We help candidates showcase their skills and experience to
                employers as a way to get hired.
              </p>
              <p className="leading-v text-lg">
                Land an internship or entry-level job at cutting edge startups,
                leading tech companies or anything in between. Your career
                starts here.
              </p>
            </article>
          </section>

          <aside className="col-start-1 col-end-7 row-start-2 self-end justify-self-end bg-white">
            <div className="overflow-hidden mid-lg:right-0 mid-lg:absolute rounded-lg mid-lg:left-0 left-desktop-img mid-lg:w-4/5  mid-lg:h-3/4 mid-lg:mx-auto">
              <img
                style={{ verticalAlign: 'middle' }}
                src="/images/desktop1.png"
                alt="Monthly budget showing a balance"
                className="border-0 max-w-3xl max-h-7xl"
              />
            </div>
          </aside>
        </div>
      </div>

      <div
        className="sm-mid-max:mt-60 md-max:mt-52 lg-max:mt-28 bg-white mb-32"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="sm:grid sm:grid-cols-12 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="sm:block col-start-1 row-start-1 col-end-5 pt-28 pr-4 lg:pr-12">
            <blockquote className="relative">
              <img
                alt="drops"
                loading="lazy"
                width="196"
                height="158"
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                src="/svg/dots.svg"
              />
              <article className="flex flex-col relative">
                <img
                  alt="Ryan Johnson headshot avatar"
                  loading="lazy"
                  src="/images/ryan.jpg"
                  className="self-center sm:self-start lg:self-center rounded-full mb-6"
                  width="64"
                  height="64"
                />
                <p className="text-xl leading-2v font-semibold mb-8">
                  “This will seriously be a game changer. Get ready for the best
                  thing to come to your finances.”
                </p>
                <p className="text-lg leading-v ">
                  <strong>Ryan Johnson</strong>
                </p>
                <p className="text-lg leading-v">
                  Principal Product Design, Dribbble
                </p>
              </article>
            </blockquote>
          </div>

          <div className="col-start-7 col-end-13 row-start-1 pt-12 sm:pt-6 z-10">
            <article>
              <h2
                className="text-first leading-[63px] leading-v leading-first md:text-sec md:leading-sec  font-body font-semibold mb-8 heading"
                style={{
                  fontSize: 'calc(1.425rem + 1vw)',
                  fontWeight: '600',
                }}
              >
                Easily swap money between all your accounts
              </h2>
              <p className="sub-para text-lg mb-6 -mt-1">
                We’re big believers in paying yourself first. Set automated
                transfers between accounts and banks to make your pay work for
                you.
              </p>
              <p className="sub-para text-lg -mt-1.5 mb-10">
                Quickly create and cancel transfers to align with your
                investment goals.
              </p>
              <ul className="flex justify-between items-center mb-4">
                {bankImages.map((img, index) => (
                  <li key={index} className=" w-16 sm-mid-max:w-10">
                    <Image src={img} alt="company" />
                  </li>
                ))}
              </ul>
              <p className="text-right opacity-50">+ many others</p>
            </article>
          </div>

          <div className="col-start-7 col-end-13 row-start-2 z-10">
            <article className="pt-12 sm:pt-24 pb-4 sm:pb-28">
              <h2
                className="text-first leading-first md:text-sec md:leading-sec  font-body font-semibold mb-8 heading"
                style={{
                  fontSize: 'calc(1.425rem + 1vw)',
                  fontWeight: '600',
                }}
              >
                Grow your savings
              </h2>
              <p className="text-lg mb-6 -mt-1.5">
                Track your net worth over time and overview your current
                portfolio.
              </p>
              <p className="text-lg -mt-1.5 mb-10">
                Better yet, view trendlines for specific accounts to better
                inform future decisions.
              </p>
            </article>
          </div>

          <div className="hidden sm:block sm:bg-white col-start-5 col-end-13 row-start-1 row-end-3" />

          <div className="col-start-1 col-end-5 row-start-2 self-end justify-self-end">
            <img
              alt="Illustration of woman holding a plant"
              loading="lazy"
              width="493"
              height="461"
              className="max-w-full h-auto sm:max-w-none sm:transform sm:translate-x-24 sm:translate-y-6"
              src="/svg/growing.svg"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
