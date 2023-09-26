import axios from "axios";


const authApi = axios.create({
  baseURL: 'http://localhost:5000/'
});

authApi.interceptors.request.use(config => {


  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

  return config;
})

//   const token = localStorage.getItem('token');

//   if( token ) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }

//   return config;
// }, err => {
//   Promise.reject(err);
// })

export default authApi;