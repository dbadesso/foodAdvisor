import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDHwHIr72IiQvknWV7jo5L5Iz4WSemo21w',
    authDomain: 'foodadvisor-d1fc3.firebaseapp.com',
    projectId: 'foodadvisor-d1fc3',
    storageBucket: 'foodadvisor-d1fc3.appspot.com',
    messagingSenderId: '105329564344',
    appId: '1:105329564344:web:af11b9de2a98db7a3cb24d'
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db }
