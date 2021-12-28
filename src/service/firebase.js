import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBFNXfY37VQRvQjWlO1uUNeYWhjpqpU16k',
	authDomain: 'udoistest.firebaseapp.com',
	projectId: 'udoistest',
	storageBucket: 'udoistest.appspot.com',
	messagingSenderId: '92419797947',
	appId: '1:92419797947:web:c5863b44f9ed6f949dca9e',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, app, db };
