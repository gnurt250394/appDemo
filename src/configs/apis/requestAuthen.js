import apis from 'configs/apis'

export const requestLogin = (username, password) => {
  let params = {
    username,
    password
  }
  return apis.post(apis.PATH.LOGIN, params)
}
export const requestRegister =(username,password,fullname,age,phone)=>{
    let params ={
        username,
        password,
        fullname,
        age,
        phone
    }
    return apis.post(apis.PATH.REGISTER,params)
}