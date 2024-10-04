import React from 'react'
import styles from './ProductPageWidget.module.css'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/shared/hooks/useReduxHooks'


export const ProductPageWidget: React.FC = () => {
    const {currProduct} = useAppSelector(state => state.product)

    console.log(currProduct);
    


  return <div className={styles.container}>
  <div className={styles.imagesContainer}>
      <img src="" alt="" />
      <div className={styles.imgCarousel}></div>
  </div>
  <div className={styles.infoContainer}>
      <div className={styles.mainInfo}></div>


      <div className={styles.colorPicker}></div>


      <button className={styles.button}></button>

      
      <div className={styles.otherInfo}></div>
  </div>
</div>
}

