import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const SignUp = dynamic(() => import('../../modals/signup'));

const MainNavigation = () => {
  const [signup, setSignup] = useState(false);
  const [mobileNav, setMobieNav] = useState(false);
  const closeSignup = () => setSignup(false);

  const router = useRouter();
  const param = router.query.signup;
  useEffect(() => {
    if (param !== undefined) {
      setSignup(true);
      router.push('/', null, { shallow: true });
    }
  }, [param]);

  return (
    <>
      {signup && <SignUp handleClose={closeSignup} />}
      <nav className="top-0 sticky bg-white z-30 w-full h-18 border-b border-[#f9fafb] flex flex-col px-4 md:px-8 lg:px-12 justify-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <img
                alt="Collabbi"
                src="/images/collabbi-logo.png"
                className="inline-block max-w-full border-0 h-7"
              />
            </div>
          </Link>
          <div className="flex items-center ml-auto space-x-4 mid-lg:hidden">
            <Link href="/login" passHref>
              <div className="block text-base mr-3 text-black cursor-pointer leading-[1.6em] ">
                Login
              </div>
            </Link>
            <button
              type="button"
              // onClick={() => setSignup(true)}
              onClick={() => router.replace('/signup')}
              className="font-semibold text-base flex px-6 py-2 h-[2.375rem] justify-center items-center rounded-4xl bg-[#0dbd8b] text-white"
            >
              Sign Up
            </button>
          </div>
          <div className="hidden ml-auto mid-lg:block">
            <button type="button" onClick={() => setMobieNav((e) => !e)}>
              <img
                src="/images/menu.png"
                alt="hamburger"
                className="w-8 h-8 "
              />
            </button>
          </div>
        </div>
      </nav>
      {/* IMPLEMENT MOBILE NAV HERE , Give some animation */}
      {mobileNav && (
        <div className="absolute hidden w-full bg-red-400 mid-lg:block h-96 top-8" />
      )}
    </>
  );
};

export default MainNavigation;
