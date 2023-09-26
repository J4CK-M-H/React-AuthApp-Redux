import { useEffect, useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import Swal from "sweetalert2";

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { startLogin, errorMessage } = useAuthStore();

  useEffect(() => {

    if (errorMessage !== undefined) {
        Swal.fire('Error en el registro', errorMessage, 'error')
    }

  }, [errorMessage]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    }

    startLogin(user)

  };

  return (
    <form onSubmit={handleSubmit} style={{
      width: '600px',
      padding: '20px',
      borderRadius: '5px',
      backgroundColor: '#fff'
    }}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Email</label>
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control py-3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} className="form-control py-3" id="exampleInputPassword1" />
      </div>
      <button
        type="submit"
        className="btn btn-primary form-control py-2"
        style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
      >Submit</button>

    </form>
  )
}
