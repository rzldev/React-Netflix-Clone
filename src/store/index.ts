import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// Slice
import authSlice from "./slices/auth-slice";
import uiSlice from "./slices/uiSlice";

const reducers = combineReducers({
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
});

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;