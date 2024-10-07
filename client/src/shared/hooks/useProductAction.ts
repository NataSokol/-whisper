import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import { getAllProducts } from "@/entities/product";



export const useProductAction = () => {
    const dispatch = useAppDispatch();

    const getProductList = useCallback(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    
    return {
        getProductList
    }
}
