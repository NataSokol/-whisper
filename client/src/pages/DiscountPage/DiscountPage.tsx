import React from "react";
import styles from "./DiscountPage.module.css";

export const DiscountPage: React.FC = () => {
  const discount = 0;
  const maxDiscount = 10;
  const amountToSpend = 200000;

  return (
    <div className={styles.container}>
      <p className={styles.title}>ВАША ТЕКУЩАЯ СКИДКА</p>
      <h1 className={styles.discount}>{discount}%</h1>
      <p className={styles.description}>ДО СКИДКИ {maxDiscount}%</p>
      <p className={styles.description}>
        ОСТАЛОСЬ ПОТРАТИТЬ {amountToSpend.toLocaleString()} РУБ.
      </p>
    </div>
  );
};

export default DiscountPage;
