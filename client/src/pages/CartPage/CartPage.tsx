import { CartList } from "@/widgets/CartList";
import styles from "./CartPage.module.css";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import OrderPlacementInCartPage from "@/widgets/OrderPlacementInCartPage/OrderPlacementInCartPage";

export function CartPage() {
  const { cart } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Корзина</h1>
        {user && cart?.CartItems.length ? (
          <div className={styles.items}>
            <CartList />
            <OrderPlacementInCartPage />
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <span className={styles.text}>Вы пока ничего не добавили в корзину</span>
            <Link className={styles.link} to={ROUTES.CATALOG}>
              <Button theme={ThemeButton.DARK} >
                в каталог
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
