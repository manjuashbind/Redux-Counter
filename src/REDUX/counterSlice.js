//this contains logics in the project


import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0 //initial  state value
    },
    reducers: {
        //define actions
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }

        },
        reset: (state) => {
            state.count = 0; //reset to zero
        }
    }
})
export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer

