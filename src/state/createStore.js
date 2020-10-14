import { createStore as reduxCreateStore } from "redux"
import { actions }  from './actions'


const reducer = (state, action) => {
  if (action.type === actions.SET_BOOKING_INFO) {
      console.log(action.payload);
    return Object.assign({}, state, {
        bookingInfo: action.payload,
    })
  }
  return state
}

const initialState = { bookingInfo: null }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore