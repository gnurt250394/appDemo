import actionTypes from 'middlewares/actions/actionTypes'

const initialState = {}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,

      }
    default:
      return state
  }
}
export default loginReducer
