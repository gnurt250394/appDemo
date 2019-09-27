import actionTypes from 'middlewares/actions/actionTypes'

const initialState = {}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      state = {
        ...state
      }
      break
    default:
      break
  }
}
export default loginReducer
