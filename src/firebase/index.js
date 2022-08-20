import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyANxIwHrNj4GiQx02Mv5OJNcfxl2l6_Aw4',
    authDomain: 'tutorial-1b492.firebaseapp.com',
    projectId: 'tutorial-1b492',
    storageBucket: 'tutorial-1b492.appspot.com',
    messagingSenderId: '19548101868',
    appId: '1:19548101868:web:d87b71054683ec135319c9',
    measurementId: 'G-MDBKE7WNC3'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}