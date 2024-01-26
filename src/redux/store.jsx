import { combineReducers, configureStore} from "@reduxjs/toolkit";

// import { PostSlice}  from "./Slices/CartSlice";
import { cart } from "./Slices/CartSlice";
import { POST } from "./Slices/CartSlice";

const myreducers = combineReducers({
    cart,
    POST,
})



export const store = configureStore({
    reducer: myreducers,
});
