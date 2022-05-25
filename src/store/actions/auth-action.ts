// Redux
import { authAction, Account, SubAccount } from "../slices/auth-slice"
import { AuthThunks, CheckEmailExistsData, fetchSubAccountData, FetchUserData, InsertSubAccountData, SignInData, SignUpData } from "./auth-action-types"
// Firebase
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc, DocumentData, FirestoreDataConverter, getDoc, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, updateDoc, arrayUnion } from "firebase/firestore"
import { auth, firestore } from "../../firebase/config"

/* Account converter for firestore snapshot converter */
const accountConverter: FirestoreDataConverter<Account> = {
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions): Account {
        const data = snapshot.data(options);
        return {
            id: snapshot.id,
            email: data.email,
            username: data.username,
            createdAt: data.createdAt,
            subAccounts: data.subAccounts ?? [],
        }
    },
    toFirestore(account: Account) {
        return {
            username: account.username,
            email: account.email,
            createdAt: account.createdAt,
        }
    }
}

/* Check if email exists or not */
export const checkEmailExists = (data: CheckEmailExistsData): AuthThunks => {
    const {email, onSuccess, onError} = data;
    
    return async dispatch => {
        dispatch(authAction.setLoading(true));

        try {
            const res: string[] = await fetchSignInMethodsForEmail(auth, email);

            dispatch(authAction.setEmailCredential(email));
            onSuccess(res.length > 0);
        } catch (e) {
            if (e instanceof Error) onError(e.message)
        } finally {
            dispatch(authAction.setLoading(false));
        }
    }
}


/* Sign Up with email Using Firebase */
export const signup = ({ email, username, password, onSuccess, onError }: SignUpData): AuthThunks => {
    return async dispatch => {
        dispatch(authAction.setLoading(true));

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res.user) {
                const userData: Account = {
                    username: username,
                    email: email,
                    subAccounts: [
                        {
                            name: 'Account 1',
                            avatarUrl: 'sub-account-1.png',
                        },
                        {
                            name: 'Kids',
                            avatarUrl: 'sub-account-kids.png',
                        },
                    ],
                    createdAt: serverTimestamp(),
                };

                await setDoc(doc(firestore, 'users', res.user.uid), userData);
                await sendEmailVerification(res.user);

                // dispatch(authAction.setNeedVerification(true));

                onSuccess()
            }
        } catch (e: unknown) {
            if (e instanceof Error) onError(e.message);
        } finally {
            dispatch(authAction.setLoading(false));
        }
    }
}


/* Sign in with firebase */
export const signin = ({ email, password, onSuccess, onError }: SignInData): AuthThunks => {
    return async dispatch => {
        dispatch(authAction.setLoading(true));

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);

            if (res.user) {
                const userRef = doc(firestore, 'users', res.user.uid).withConverter(accountConverter);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();

                    dispatch(authAction.login({user: userData, updateStatus: true}));
                    // dispatch(authAction.setNeedVerification(res.user.emailVerified));

                    onSuccess();
                } else {
                    throw new Error("Check your email and password again!");
                }
            }
        } catch (e: unknown) {
            if (e instanceof Error) onError(e.message);
        } finally {
            dispatch(authAction.setLoading(false));
        }
    }
}

/* Fetch user data from firestore by user id */
export const fetchUser = ({onSuccess, onError}: FetchUserData): AuthThunks => {
    return async (dispatch) => {
        const userId = localStorage.getItem('userId');

        dispatch(authAction.setLoading(true));

        try {
            if (!userId) throw new Error();

            const userRef = doc(firestore, 'users', userId).withConverter(accountConverter);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                const user: Account = userSnap.data();
                dispatch(authAction.fetchUser(user));

                onSuccess();
            } else {
                throw new Error("User doesn't exists");
            }
        } catch (e: unknown) {
            dispatch(authAction.signOut());
            if (e instanceof Error) onError(e.message);
        } finally {
            dispatch(authAction.setLoading(false));
        }
    }
}

/* Fetch sub account from redux state by sub account id */
export const fetchSubAccount = ({ subAccounts, onSuccess, onError }: fetchSubAccountData): AuthThunks => {
    return async (dispatch) => {
        const id = sessionStorage.getItem('subAccountId');
        try {
            if (subAccounts.length > 0 && id !== null) {
                const subAccount = subAccounts.find((sa: SubAccount) => sa.name === id);
                if (subAccount) dispatch(authAction.setSubAccount(subAccount));
                else throw new Error('Sub Account not found');
                
                onSuccess();
            } else {
                throw new Error('User does not have sub accounts or saved id');
            }
        } catch (e: unknown) {
            if (e instanceof Error) onError(e.message);
        }
    }
}

/* Insert new sub account into firestore */
export const insertSubAccount = ({userId, subAccount, onSuccess, onError}: InsertSubAccountData): AuthThunks => {
    return async (dispatch) => {
        try {
            await updateDoc(doc(firestore, 'users', userId), {
                'subAccounts': arrayUnion(subAccount),
            });

            dispatch(authAction.addSubAccount(subAccount));

            onSuccess();
        } catch (e: unknown) {
            if (e instanceof Error) onError(e.message);
        }
    }
}