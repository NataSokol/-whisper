import React, { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { refreshAccessToken } from "@/entities/user";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);

  return <></>;
};

export default Layout;
