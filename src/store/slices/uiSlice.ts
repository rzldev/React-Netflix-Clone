import { createSlice } from "@reduxjs/toolkit"
import { BackgroundColorType, NavbarType, UI } from "./uiSliceTypes";

const uiInitialState: UI = {
    navbarType: null,
    backgroundColorType: BackgroundColorType.DARK,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        setNavbarType (state, action: { payload: NavbarType }) {
            state.navbarType = action.payload;
        },
        setBackgroundType (state, action: {payload: BackgroundColorType}) {
            state.backgroundColorType = action.payload;
        }
    }
});

export default uiSlice;

export const uiAction = uiSlice.actions;

export * from './uiSliceTypes'