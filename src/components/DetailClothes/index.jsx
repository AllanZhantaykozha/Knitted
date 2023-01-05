import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addIdToCard } from '../../redux/slices/cardSlice';
import styles from './DetailClothes.module.scss';

export const DetailClothes = ({ id, imageUrl, title, price, desciption }) => {
  const dispatch = useDispatch();

  const addToCard = () => {
    axios.post('https://63a58fcef8f3f6d4abf9637a.mockapi.io/card', {
      id: id,
      title: title,
      price: price,
      imageUrl: imageUrl,
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={imageUrl} alt={title} />

        <div className={styles.div}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.price}>{price} ₽</p>
          <div className={styles.btns}>
            <p onClick={() => addToCard()} className={styles.btn_card}>
              Добавить в корзину
            </p>
            <div className={styles.btn_card_back}></div>
            <p className={styles.btn_favorite}>
              <svg
                className={styles.btn_favorite_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none">
                <path
                  d="M15.3746 6.23311C15.5625 6.42644 15.8205 6.53572 16.0901 6.53618C16.3597 6.53663 16.618 6.42823 16.8066 6.23554L19.2624 3.72554C19.2627 3.72524 19.263 3.72493 19.2633 3.72463C21.8276 1.11948 25.9511 1.11978 28.5151 3.72554L28.5151 3.72556L28.5209 3.73143C29.8313 5.04122 30.4698 6.74957 30.4698 8.50647C30.4698 10.2307 29.8301 11.9604 28.5463 13.2724L26.0885 15.7844L16.1084 25.9846L3.67045 13.2724C2.38592 11.9596 1.74695 10.2465 1.74695 8.50647C1.74695 6.76454 2.38714 5.03565 3.66953 3.72447C6.23315 1.1202 10.3716 1.11984 12.9356 3.72337L15.3746 6.23311Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <div className={styles.btn_favorite_back}></div>
          </div>
          <p className={styles.description}>{desciption}</p>
        </div>
      </div>
    </div>
  );
};
