import apis from 'configs/apis'

export const requestLogin = (username, password) => {
  let params = {
    username,
    password
  }
  return apis.post(apis.PATH.LOGIN, params)
}
export const requestRegister = (fullname, password, email, phone, gender) => {
  let params = {
    name:fullname,
    password,
    phone,
    email,
    gender
  }
  return apis.post(apis.PATH.REGISTER, params)
}