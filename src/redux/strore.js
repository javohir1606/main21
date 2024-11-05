import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./service/user-service";

export const store = configureStore({
  reducer:{
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware:(defaultMiddlware)=>{
    return defaultMiddlware().concat(userApi.middleware);
  }
})