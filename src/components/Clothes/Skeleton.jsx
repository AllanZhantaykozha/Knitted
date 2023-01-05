import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Clothes.module.scss';

export const Skeleton = (props) => (
  <ContentLoader
    className={styles.root}
    speed={2}
    width={359}
    height={506}
    viewBox="0 0 359 506"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="291" rx="0" ry="0" width="280" height="0" />
    <rect x="0" y="379" rx="0" ry="0" width="237" height="48" />
    <rect x="0" y="448" rx="0" ry="0" width="100" height="24" />
    <rect x="0" y="0" rx="0" ry="0" width="359" height="359" />
  </ContentLoader>
);
