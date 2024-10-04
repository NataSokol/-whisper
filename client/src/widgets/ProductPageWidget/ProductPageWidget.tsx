import React from 'react'
import styles from './ProductPageWidget.module.css'
import { useAppSelector } from '@/shared/hooks/useReduxHooks'


export const ProductPageWidget: React.FC = () => {
    const {currProduct} = useAppSelector(state => state.product)

    // console.log(currProduct);
    


  return (

  <div className={styles.container}>
  <div className={styles.imagesContainer}>
      <img src={currProduct?.Images[0]?.url} alt="фото товара" />
      <div className={styles.imgCarousel}></div>
  </div>
  <div className={styles.infoContainer}>
      <div className={styles.mainInfo}>
        <div>{currProduct?.title}</div>
        <div>{currProduct?.price}</div>
        <div>{currProduct?.salePrice}</div>
      </div>

      <div className={styles.colorPicker}>
            {currProduct?.Colors?.map(color => (
              <div className={styles.color} style={{backgroundColor: color.colorCode, width: "20px", height: "20px"}}></div>
            ))}
      </div>

      <div className={styles.sizePicker}>
            {currProduct?.ProductSizes?.map(size => (
              <div className={styles.size}>{size.sizeTitle}</div>
            ))}
      </div>

      <button className={styles.button}>добавить в корзину</button>
      <div className={styles.otherInfo}>
        <div className={styles.description}>{currProduct?.description}</div>
        <div className={styles.composition}>{currProduct?.composition}</div>
      </div>
  </div>
</div>
  )
}

