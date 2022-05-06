// Redux
import { authAction, Account } from "../slices/auth-slice"
import { AuthThunks, CheckEmailExistsData, SignInData, SignUpData } from "./authActionTypes"
// Firebase
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, doc, DocumentData, FirestoreDataConverter, getDoc, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions } from "firebase/firestore"
import { auth, firestore } from "../../firebase/config"

const authConverter: FirestoreDataConverter<Account> = {
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions): Account {
        const data = snapshot.data(options);
        return {
            id: data.id,
            email: data.email,
            username: data.username,
            createdAt: data.createdAt,
        }
    },
    toFirestore(account: Account) {
        return account
    }
}

/* Check if email exists or not */
export const checkEmailExists = ({ email, onSuccess, onError }: CheckEmailExistsData): AuthThunks => {
    return async dispatch => {
        dispatch(authAction.setLoading(true));

        try {
            const res: string[] = await fetchSignInMethodsForEmail(auth, email);

            dispatch(authAction.setEmailCredential(email));
            onSuccess(res.length > 0)
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
                    id: res.user.uid,
                    username: username,
                    email: email,
                    createdAt: serverTimestamp(),
                };

                await addDoc(collection(firestore, "users"), userData);
                await sendEmailVerification(res.user);

                dispatch(authAction.setNeedVerification(true));
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
export const signin = ({ email, password, onError }: SignInData): AuthThunks => {
    return async dispatch => {
        dispatch(authAction.setLoading(true));

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);

            if (res.user) {
                const userRef = doc(firestore, 'users', res.user.uid).withConverter(authConverter);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();

                    dispatch(authAction.login(userData));
                    dispatch(authAction.setNeedVerification(res.user.emailVerified));
                }
                else {
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

