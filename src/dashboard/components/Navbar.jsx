import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {

  const { user, startLogout } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark px-4">

      <span className="navbar-brand">
        Usuario: { user?.name }
      </span>

      <button className="btn btn-outline-light" onClick={ startLogout }>
        <span>Salir</span>
      </button>
    </div>
  )
}
