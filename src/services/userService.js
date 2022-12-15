import axios from "../axios"
const handleLogin = ( username, password ) => {
  console.log(username,password)
  return axios.post('/api/login', {email: username, password: password})
}

export {handleLogin}
