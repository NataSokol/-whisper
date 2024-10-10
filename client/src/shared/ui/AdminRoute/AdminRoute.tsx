import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { ROUTES } from "@/app/router/routes";

export const AdminRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const user = useAppSelector((state) => state.user.user);
  const isAdmin = user?.isAdmin;

  if (!isAdmin) {
    return <Navigate to={ROUTES.HOME} />;
  }
  return <>{children}</>;
};
