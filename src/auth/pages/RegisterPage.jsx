import { useEffect, useState } from "react"
import { useAuthStore } from "../../hooks/useAuthStore";
import Swal from "sweetalert2";

export const RegisterPage = () => {

  const { startRegister, errorMessage } = useAuthStore();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error')
  }

  }, [ errorMessage ])
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      email,
      password
    }

    startRegister(body)

    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      width: '600px',
      padding: '20px',
      borderRadius: '5px',
      backgroundColor: '#fff'
    }}>
      <div className="mb-3">
        <label htmlFor="nameField" className="form-label" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Nombre</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control py-3"
          id="nameField"
          placeholder="Nombre completo"
        />
      </div>
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
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className="form-control py-3"
          id="exampleInputPassword1"
          placeholder="************"
          />
      </div>
      <button
        type="submit"
        className="btn btn-primary form-control py-2"
        style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
      >Submit</button>

    </form>
  )
}
