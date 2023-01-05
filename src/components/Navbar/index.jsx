import React from 'react';
import styles from './Navbar.module.scss';
import { useDispatch } from 'react-redux';
import { changeSelect } from '../../redux/slices/selectSlice';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <ul>
        <Link to="/">
          <li className={styles.main_link}>Главная</li>
        </Link>
        <li>
          <div className={styles.dropdown}>
            <p className={styles.catalog_link}>Каталог</p>
            <div className={styles.dropdown_content}>
              <p onClick={() => dispatch(changeSelect('Свитер'))} className={styles.dropdown_link}>
                Свитеры
              </p>
              <hr />
              <p
                onClick={() => dispatch(changeSelect('Кардиган'))}
                className={styles.dropdown_link}>
                Кардиганы
              </p>
              <hr />
              <p
                onClick={() => dispatch(changeSelect('Аксессуар'))}
                className={styles.dropdown_link}>
                Аксессуары
              </p>
            </div>
          </div>
        </li>
      </ul>
      <h1 className={styles.title}>_crochagstore</h1>
      <ul>
        <Link to="/favorites">
          <li className={styles.liked_link}>Избранное</li>
        </Link>
        <Link to="/card">
          <li className={styles.basket_link}>Корзина</li>
        </Link>
      </ul>
    </div>
  );
};
