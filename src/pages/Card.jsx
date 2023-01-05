import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../components/CardItem';
import { addItemsToCard } from '../redux/slices/cardSlice';

export const Card = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.card.items);

  React.useEffect(() => {
    axios
      .get('https://63a58fcef8f3f6d4abf9637a.mockapi.io/card')
      .then((res) => dispatch(addItemsToCard(res.data)));
  }, []);
  return (
    <div>
      {items.map((obj) => (
        <CardItem {...obj} />
      ))}
    </div>
  );
};
