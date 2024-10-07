import React, { useEffect } from "react";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { AdminFormProduct, AdminProductList } from "@/widgets/AdminWidget";

export const AdminProductFeature: React.FC = () => {
  const { getProductList } = useProductAction();
  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  return (
    <div>
      <AdminFormProduct />
      <AdminProductList products={products} />
    </div>
  );
};

export default AdminProductFeature;
