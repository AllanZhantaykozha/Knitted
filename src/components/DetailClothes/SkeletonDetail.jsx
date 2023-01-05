import React from 'react';
import styles from './DetailClothes.module.scss';

export const SkeletonDetail = () => {
  return (
    <div>
      <span className={styles.loader}></span>
    </div>
  );
};
