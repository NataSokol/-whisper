import React, { useEffect } from 'react'
// import styles from './ProductPage.module.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '@/shared/hooks/useReduxHooks'
import { getProduct } from '@/entities/product/model/productThunk'
import { ProductPageWidget } from '@/widgets/ProductPageWidget'

export const ProductPage: React.FC = () => {

    const {productId} = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(getProduct(+productId))
        }
    }, [dispatch, productId])
  return( 
<ProductPageWidget/>
  )
}

export default ProductPage