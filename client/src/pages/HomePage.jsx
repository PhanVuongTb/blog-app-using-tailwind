/** @format */

import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Articles from './Articles';
import Hero from './Hero';

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Articles/>
      </MainLayout>
    </>
  );
};

export default HomePage;
