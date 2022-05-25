// UI state interface
export interface UIState {
    navbarType: NavbarType | null;
    backgroundColorType?: BackgroundColorType;
    browseMode: BrowseMode;
}

// Navbar type enum  
export enum NavbarType {
    ONLY_LOGO,
    BEFORE_LOGIN,
    AFTER_LOGIN,
    SIGNUP,
}

// App background type enum (dark or light)
export enum BackgroundColorType {
    DARK,
    LIGHT,
}

// Browse mode enum
export enum BrowseMode {
    CHOOSE_SUB_ACCOUNT = 0,
    ADD_SUB_ACCOUNT = 1,
    MANAGE_SUB_ACCOUNTS = 2,
    MOVIE_LIST = 3,
}

/*
The payload contains:
- Navbar type
*/
export type NavbarTypeReducer = {
    payload: NavbarType,
}

/*
The payload contains:
- Background type
*/
export type BackgroundTypeReducer = {
    payload: BackgroundColorType,
}

/*
The payload contains:
- Browse mode
*/
export type BrowseModeReducer = {
    payload: BrowseMode,
}