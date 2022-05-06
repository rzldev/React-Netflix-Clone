export interface Account {
    id: string;
    username: string | undefined;
    email: string | undefined;
    createdAt: unknown;
}

export interface SubAccount {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface AuthState {
    user: Account | null;
    emailCredential: string | null;
    isLoggedIn: boolean;
    subAccount: SubAccount | null;
    loading: boolean;
    needVerification: boolean;
}

export type SetUserReducer = {
    payload: Account,
}

export type SetSignOutReducer = {

}

export type SetSubAccountReducer = {
    payload: SubAccount,
}

export type SetEmailCredentialReducer = {
    payload: string
}

export type SetLoadingReducer = {
    payload: boolean,
}

export type SetNeedVerificationReducer = {
    payload: boolean,
}

export type SetSuccessReducer = {
    payload: Success,
}
