// Account object interface
export interface Account {
    id?: string;
    username: string | undefined;
    email: string | undefined;
    createdAt: unknown;
    subAccounts?: SubAccount[];
}

// Sub account object interface
export interface SubAccount {
    id?: string;
    name: string;
    avatarUrl: string;
}

// Auth state interface
export interface AuthState {
    user: Account | null;
    emailCredential: string | null;
    isLoggedIn: boolean;
    subAccount: SubAccount | null;
    loading: boolean;
    needVerification: boolean;
}

/*
The payload contains:
- User
- Update auth status
*/
export type SetUserReducer = {
    payload: {
        user: Account;
        updateStatus?: boolean;
    }
}

/*
The payload contains:
- User
*/
export type FetchUserReducer = {
    payload: Account,
}

/*
The payload contains:
*/
export type SetSignOutReducer = {

}

/*
The payload contains:
- Sub Account
*/
 export type SetSubAccountReducer = {
    payload: SubAccount,
}

/*
The payload contains:
*/
export type SetIsLoggedInReducer = {

}

/* 
The Payload contains:
- Email
*/
export type SetEmailCredentialReducer = {
    payload: string
}

/*
The payload contains:
- Loading status
*/
export type SetLoadingReducer = {
    payload: boolean,
}

/*
The payload contains:
- Sub Account
*/
export type AddSubAccountReducer = {
    payload: SubAccount,
}
