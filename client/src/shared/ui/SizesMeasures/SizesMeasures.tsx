import React from 'react'
import styles from './SizesMeasures.module.css'
import { useAppSelector } from '@/shared/hooks/useReduxHooks';

type SizesMeasuresProps = {
    active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SizesMeasures: React.FC<SizesMeasuresProps> = ({active, setActive}) => {
    const { currProduct } = useAppSelector((state) => state.product);
  

  return (<div className={styles.sizesModal}>
  <div className={styles.sizesModalHeader}>
    <div className={styles.sizesHeader}>
      {currProduct?.title}
    </div>
    <button
      className={styles.closeModal}
      onClick={() => setActive(!active)}
    >
      <img src="../../public/img/plus.svg" alt="Закрыть" />
    </button>
  </div>
  {currProduct?.ProductSizes?.map((size) => (
    <div key={size.id} className={styles.sizeModal}>
      {size?.sizeTitle && (
        <div className={styles.measure}>{size.sizeTitle}</div>
      )}
      {size?.length && (
        <div className={styles.measure}>
          Длина: {size.length}
        </div>
      )}
      {size?.width && (
        <div className={styles.measure}>
          Ширина: {size.width}
        </div>
      )}
      {size?.chestGirth && (
        <div className={styles.measure}>
          Обхват груди: {size.chestGirth}
        </div>
      )}
      {size?.waistGirth && (
        <div className={styles.measure}>
          Обхват талии: {size.waistGirth}
        </div>
      )}
      {size?.hipGirth && (
        <div className={styles.measure}>
          Обхват бедер: {size.hipGirth}
        </div>
      )}
      {size?.chestUnderGirth && (
        <div className={styles.measure}>
          Обхват под грудью: {size.chestUnderGirth}
        </div>
      )}
      {size?.frontLength && (
        <div className={styles.measure}>
          Длина по переду: {size.frontLength}
        </div>
      )}
      {size?.externalSeamLength && (
        <div className={styles.measure}>
          Длина внешних швов: {size.externalSeamLength}
        </div>
      )}
      {size?.innerSeamLength && (
        <div className={styles.measure}>
          Длина внутренних швов: {size.innerSeamLength}
        </div>
      )}
      {size?.sleeveLength && (
        <div className={styles.measure}>
          Длина рукава:{size.sleeveLength}
        </div>
      )}
    </div>
  ))}
</div>)
}

export default SizesMeasures