import React, { useState, useEffect } from 'react';

import AuthContext from './context';

import { auth, firebase } from '../../service/firebase';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				const { displayName, photoURL, uid, email } = user;
				if (!displayName || !photoURL) {
					throw new Error('Missing Informations');
				}

				setUser({
					id: uid,
					avatar: photoURL,
					name: displayName,
					email: email,
				});
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const signInWithGoogle = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		const result = await auth.signInWithPopup(provider);

		if (result.user) {
			const { displayName, photoURL, uid, email } = result.user;
			if (!displayName || !photoURL) {
				throw new Error('Missing Informations');
			}

			setUser({
				id: uid,
				avatar: photoURL,
				name: displayName,
				email: email,
			});
		}
	};

	return (
		<AuthContext.Provider value={{ user, setUser, signInWithGoogle }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
