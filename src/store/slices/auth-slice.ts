import { createSlice } from '@reduxjs/toolkit'
import { AuthState, SetUserReducer, SetSubAccountReducer, SetSignOutReducer, SetEmailCredentialReducer, SetLoadingReducer, FetchUserReducer, SetIsLoggedInReducer, AddSubAccountReducer } from './auth-slice-types';

// Auth Initial State
const authInitialState: AuthState = {
    user: null,
    emailCredential: null,
    isLoggedIn: sessionStorage.getItem('isLoggedIn') ? true : false,
    subAccount: null,
    loading: false,
    needVerification: false,
}

// Auth Reducer
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        fetchUser(state, action: FetchUserReducer) {
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem('isLoggedIn', String(state.isLoggedIn));
        },
        login(state, action: SetUserReducer) {
            state.user = action.payload.user;
            if (action.payload.updateStatus) {
                state.isLoggedIn = true;
                localStorage.setItem('isLoggedIn', String(state.isLoggedIn));
            }
            if (state.user.id) localStorage.setItem('userId', state.user.id);
        },
        signOut(state, _: SetSignOutReducer) {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userId');
        },
        setIsLoggedIn(state, _: SetIsLoggedInReducer) {
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', String(state.isLoggedIn));
        },
        setEmailCredential(state, action: SetEmailCredentialReducer) {
            state.emailCredential = action.payload;
        },
        setSubAccount(state, action: SetSubAccountReducer) {
            state.subAccount = action.payload;
            sessionStorage.setItem('subAccountId', state.subAccount.name);
        },
        setLoading(state, action: SetLoadingReducer) {
            state.loading = action.payload
        },
        addSubAccount(state, action: AddSubAccountReducer) {
            let userTemp = state.user;
            if (userTemp?.subAccounts) userTemp.subAccounts.push(action.payload);
            state.user = userTemp;
        },
    }
});

export default authSlice;

export const authAction = authSlice.actions;

export type AuthActionTypes = typeof authAction;

export * from './auth-slice-types.d';