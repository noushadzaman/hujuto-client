import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleAuthProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const setNamePhoto = (name, photoURL) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            const userInfo = { email: currentUser?.email };
            if (currentUser) {
                axios.post(`https://hujuto-server.vercel.app/jwt`, userInfo, { withCredentials: true })
                    .then(res => {
                        console.log('token res', res.data);
                    });
                setLoading(false);
            }
            else {
                axios.post(`https://hujuto-server.vercel.app/logout`, userInfo, { withCredentials: true })
                    .then(res => {
                        console.log('token res', res.data);
                    });
                setLoading(false);
            }
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(() => { })
    }

    const userInfo = {
        user,
        loading,
        createUser,
        setNamePhoto,
        signIn,
        googleSignIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;