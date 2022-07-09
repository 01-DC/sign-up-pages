import React from 'react';
import MainNavigation from './MainNavigation';
// import Footer from './Footer';

const Index = ({ children }) => (
  <>
    <MainNavigation />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);

export default Index;
