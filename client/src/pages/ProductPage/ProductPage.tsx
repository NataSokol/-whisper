import React from 'react'
import styles from './ProductPage.module.css'

type ProductPageProps = {
  
}

export const ProductPage: React.FC<ProductPageProps> = ({}) => {

  return( 
  <div className={styles.container}>
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
  )
}

export default ProductPage