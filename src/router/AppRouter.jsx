import { Navigate, Route, Routes } from "react-router-dom"
import { AuthLayout, LoginPage, RegisterPage } from "../auth";
import { DashboardLayout } from "../dashboard";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";

const AppRouter = () => {

  const { checkAuth, status } = useAuthStore();

  useEffect(() => {

    checkAuth();

  }, []);

  if (status === 'checking') {
    return <h3>Cargando...</h3>
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <Route path="/auth/*" element={<AuthLayout />}>
              <Route index path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          )
          : (
            <>
              <Route path="/" element={<DashboardLayout />} />
              <Route path="/*" element={<Navigate to={"/"} />} />
            </>
          )
      }
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  )
}

export default AppRouter