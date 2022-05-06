export interface UI {
    navbarType: NavbarType | null;
    backgroundColorType?: BackgroundColorType;
}

export enum NavbarType {
    ONLY_LOGO,
    BEFORE_LOGIN,
    AFTER_LOGIN,
    SIGNUP,
}

export enum BackgroundColorType {
    DARK,
    LIGHT,
}