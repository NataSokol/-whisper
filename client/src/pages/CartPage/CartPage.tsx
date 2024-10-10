import { CartList } from "@/widgets/CartList";
import styles from "./CartPage.module.css";

export function CartPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.items}>
        <CartList />
      </div>
    </div>
  );
}
