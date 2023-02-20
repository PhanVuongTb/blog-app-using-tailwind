/** @format */

import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Articles from './Articles';
import CTA from './CTA';
import Hero from './Hero';

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Articles />
        <CTA/>
      </MainLayout>
    </>
  );
};

export default HomePage;
