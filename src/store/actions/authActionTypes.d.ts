import { ThunkAction } from "redux-thunk";
import { authAction } from "./slices/auth-slice";

interface IResponse {
    onSuccess: (arr?: any[]) => void;
    onError: (message: string) => void;
}

export interface CheckEmailExistsData extends IResponse {
    email: string;
    onSuccess: (emailExists: boolean) => void = () => {}
}

export interface SignUpData extends IResponse {
    username: string;
    email: string;
    password: string;
}

export interface SignInData extends IResponse {
    email: string;
    password: string;
}

type AuthActionTypes = ReturnType<typeof authAction>

export type AuthThunks = ThunkAction<ReturnType, AuthState, unknown, AuthActionTypes>

export interface AuthConverter {
    toFirebase: (accountData: Account) => Account
    fromFirebase: (snapshot: ReturnType<typeof firebase.database.DataSnapshot>) => Account
}