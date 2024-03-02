
//This file contains reducers

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({
    reducer: {
        //reducer should be in key : value pair
        counter: counterSlice
    }
})