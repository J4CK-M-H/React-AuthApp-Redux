import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div
      className="container-fluid d-flex flex-column p-0 align-items-center justify-content-center"
      style={{
        height: '100vh',
        backgroundColor: '#F1EFEF'
      }}>
      <Outlet />
    </div>
  )
}
