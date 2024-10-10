import { CartList } from "@/widgets/CartList";
import styles from "./CartPage.module.css";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

export function CartPage() {
  const { cart } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);

console.log(11111111111111, user, cart);


  return (
    <>
      {user && cart ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Корзина</h1>
          <div className={styles.items}>
            <CartList />
          </div>
        </div>
      ):
      (<>
      <span>Вы пока ничего не добавили в корзину</span>
      <Link className={styles.link} to={ROUTES.CATALOG}>
            <Button theme={ThemeButton.LIGHT} className={styles.buttonLink}>в каталог</Button>
          </Link>
      </>)}
    </>
  );
}
