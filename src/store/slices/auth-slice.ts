import { createSlice } from '@reduxjs/toolkit'
import { AuthState, Account, SetUserReducer, SetSubAccountReducer, SetSignOutReducer, SetEmailCredentialReducer, SetLoadingReducer, SetNeedVerificationReducer } from './authSliceTypes';

const getUser = (): Account | null => {
    const userStr = localStorage.getItem('user')
    if (userStr) {
        const user: Account = JSON.parse(userStr)
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
        }
    } else {
        return null
    }
}

const authInitialState: AuthState = {
    user: getUser(),
    emailCredential: null,
    isLoggedIn: localStorage.getItem('isLoggedIn') ? true : false,
    subAccount: null,
    loading: false,
    needVerification: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, action: SetUserReducer) {
            state.isLoggedIn = true;
            state.user = action.payload
            sessionStorage.setItem('isLoggedIn', String(state.isLoggedIn));
            sessionStorage.setItem('user', JSON.stringify(state.user))
        },
        signOut(state, action: SetSignOutReducer) {
            state.isLoggedIn = false
            state.user = null
            sessionStorage.removeItem('isLoggedIn')
            sessionStorage.removeItem('user')
        },
        setEmailCredential(state, action: SetEmailCredentialReducer) {
            state.emailCredential = action.payload;
        },
        setSubAccount(state, action: SetSubAccountReducer) {
            state.subAccount = action.payload;
        },
        setLoading(state, action: SetLoadingReducer) {
            state.loading = action.payload
        },
        setNeedVerification(state, action: SetNeedVerificationReducer) {
            state.needVerification = true
        }
    }
});

export default authSlice;

export const authAction = authSlice.actions;

export type AuthActionTypes = typeof authAction

export * from './authSliceTypes'