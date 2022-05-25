import { ThunkAction } from "redux-thunk";
import { SubAccount } from "../slices/auth-slice-types";
import { authAction } from "./slices/auth-slice";

/* Response interface for actions */
interface IResponse {
    onSuccess: (args?: any[]) => void;
    onError: (message: string) => void;
}

/*
The payload contains:
- Email
- Response Interface
*/
export interface CheckEmailExistsData extends IResponse {
    email: string;
    onSuccess: (emailExists: boolean) => void = () => {}
}

/*
The payload contains:
- Username
- Email
- Password
- Response Interface
*/
export interface SignUpData extends IResponse {
    username: string;
    email: string;
    password: string;
}

/*
The payload contains:
- Email
- Password
- Response Interface
*/
export interface SignInData extends IResponse {
    email: string;
    password: string;
}

/*
The payload contains:
- Response Interface
*/
export interface FetchUserData extends IResponse {

}

/*
The payload contains:
- Sub account array
- Response Interface
*/
export interface fetchSubAccountData extends IResponse {
    subAccounts: SubAccount[];
}

/*
The payload contains:
- User ID
- Sub account
- Response Interface
*/
export interface InsertSubAccountData extends IResponse {
    userId: string;
    subAccount: SubAccount;
}

type AuthActionTypes = ReturnType<typeof authAction>
export type AuthThunks = ThunkAction<ReturnType, AuthState, unknown, AuthActionTypes>

export interface AuthConverter {
    toFirebase: (accountData: Account) => Account
    fromFirebase: (snapshot: ReturnType<typeof firebase.database.DataSnapshot>) => Account
}