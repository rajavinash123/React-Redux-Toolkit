import { createSlice } from '@reduxjs/toolkit'

import { Provider } from "react-redux";
import { store } from '../../Redux/store';
const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  reducers: {
    increment:state=> {
      state.value+=1
    },
    reset:state=>{
        state.value=0
    },
    decrement(state) {
      state.value-=1
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount ,reset} = counterSlice.actions
export default counterSlice.reducer

//step
// create store
// wrape app component under Provider
// createSlice
// register reducer in store
