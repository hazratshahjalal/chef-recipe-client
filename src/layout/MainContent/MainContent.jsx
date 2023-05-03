import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer'; import { Link, Outlet } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
;

const MainContent = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainContent;