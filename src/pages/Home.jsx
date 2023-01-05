import React from 'react';
import { Clothes } from '../components/Clothes';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import { useSelector } from 'react-redux';
import { Skeleton } from '../components/Clothes/Skeleton';

export const Home = ({ isLoading }) => {
  const items = useSelector((state) => state.items.items);
  const select = useSelector((state) => state.select.type);

  return (
    <div>
      <Navbar />
      <h1 className="title_sweater">{select + 'ы'}</h1>
      <div className="wrapper">
        {isLoading
          ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Clothes key={obj.id} {...obj} />)}
      </div>
      <Footer />
    </div>
  );
};
