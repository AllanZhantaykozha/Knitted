import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Clothes.module.scss';

export const Clothes = ({ title, price, imageUrl, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className={styles.root}>
        <img className={styles.img} src={imageUrl} alt="Img" />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price} ₽</p>
      </div>
    </Link>
  );
};
