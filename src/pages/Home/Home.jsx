import React from 'react';
import Banner from '../../components/Banner/Banner';
import ContactUs from '../../components/ContactUs/ContactUs';
import AboutUs from '../../components/AboutUs/AboutUs';


const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <ContactUs></ContactUs>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;