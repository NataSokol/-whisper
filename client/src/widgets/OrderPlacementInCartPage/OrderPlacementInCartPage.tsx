import React from 'react'
import styles from './OrderPlacementInCartPage.module.css'
import { useAppSelector } from '@/shared/hooks/useReduxHooks';
import { ROUTES } from '@/app/router/routes';
import { Link } from 'react-router-dom';

type OrderPlacementInCartPageProps = {
  
}

export const OrderPlacementInCartPage: React.FC<OrderPlacementInCartPageProps> = ({}) => {
    const {cart} = useAppSelector((state) => state.cart);

  return (
  <div className={styles.container}>
    <div><Link to={ROUTES.SIGNIN}>Войдите</Link> или <Link to={ROUTES.SIGNUP}>зарегистрируйтесь</Link>, чтобы получить баллы за покупку</div>
    <span>ваш заказ</span>
    <div><p>сумма заказа</p><p>{cart?.total}₽</p></div>
    <div><p>итого</p><p>{cart?.salePrice}₽</p></div>
    <div></div>
  </div>
  )
}

export default OrderPlacementInCartPage