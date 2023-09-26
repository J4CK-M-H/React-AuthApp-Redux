import { useDispatch, useSelector } from "react-redux"
import authApi from "../api/auth";
import { checking, cleanErrorMessage, onLogin, onLogout } from "../store/auth/authSlice";


export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const startRegister = async (body) => {

    dispatch(checking());

    try {
      await authApi.post('auth/register', body);

    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      dispatch(onLogout('Campos invalidos'));
      setTimeout(() => {
        dispatch(cleanErrorMessage())
      }, 100);
    }

  };

  const startLogin = async ({ email, password }) => {

    dispatch(checking());

    try {

      const { data } = await authApi.post('auth/login', { email: email, password: password });
      localStorage.setItem('token', data.token);
      dispatch(onLogin({ name: data.usuario.name, email: data.usuario.email, uid: data.usuario.uid }))

    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(cleanErrorMessage())
      }, 100);
    }

  }

  const startLogout = () => {
  
    localStorage.clear();
    dispatch(onLogout());
  };

  const checkAuth = async () => {

    const token = localStorage.getItem('token');
    if (!token) return dispatch(onLogout())

    try {

      const { data } = await authApi.get('auth/session');
      localStorage.setItem('token', data.token);
      dispatch(onLogin({ name: data.name, email: data.email, uid: data.uid }))

    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout())
    }
  };


  return {
    status,
    user,
    errorMessage,

    startLogin,
    startRegister,
    checkAuth,
    startLogout
  }
}