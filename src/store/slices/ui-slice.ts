import { createSlice } from "@reduxjs/toolkit"
import { UIState, BackgroundColorType, NavbarType, BrowseMode, NavbarTypeReducer, BackgroundTypeReducer, BrowseModeReducer } from './ui-slice-types.d';

// Get browse mode from session storage
const getBrowseMode = (): BrowseMode => {
    let mode = sessionStorage.getItem('browseMode');
    if (mode === null) return BrowseMode.CHOOSE_SUB_ACCOUNT;
    else return parseInt(mode);
}

// UI initial state
const uiInitialState: UIState = {
    navbarType: NavbarType.BEFORE_LOGIN,
    backgroundColorType: BackgroundColorType.DARK,
    browseMode: getBrowseMode(),
}

// UI Reducer
const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        setNavbarType (state, action: NavbarTypeReducer) {
            state.navbarType = action.payload;
        },
        setBackgroundType (state, action: BackgroundTypeReducer) {
            state.backgroundColorType = action.payload;
        },
        setBrowseMode (state, action: BrowseModeReducer) {
            state.browseMode = action.payload;
            if (state.browseMode === BrowseMode.CHOOSE_SUB_ACCOUNT || state.browseMode === BrowseMode.MOVIE_LIST) 
                sessionStorage.setItem('browseMode', String(state.browseMode));
        }
    }
});

export default uiSlice;

export const uiAction = uiSlice.actions;

export * from './ui-slice-types.d';