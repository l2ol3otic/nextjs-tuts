import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import { Toy } from '../app/form/interface'

// PASTE YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyChWqJ16uPq4GZUja74AfZzjtdKK8hF6lU",
  authDomain: "realtime-broker-sale.firebaseapp.com",
  databaseURL: "https://realtime-broker-sale.firebaseio.com",
  projectId: "realtime-broker-sale",
  storageBucket: "realtime-broker-sale.appspot.com",
  messagingSenderId: "278950718994",
  appId: "1:278950718994:web:d08f34e442d069e823f2cb",
  measurementId: "G-14DQ0RKVVG"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err: any){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

export const getToy = async () => {
  const db = firebase.firestore().collection('toys')
  const document = await db.get()
  const data = document.docs.map(doc => doc.data())
  return data
}

export const getToyById = async (toy_id: string) => {
    const db = firebase.firestore().collection('toys').doc(toy_id)
    const document = await db.get()
    if(document.exists){
        const data = document.data()
        return data
    }
}

export const addNewToy = async (toy: Toy) => {
    const { id } = toy
    const db = firebase.firestore().collection('toys').doc(`${id}`)
    await db.set(JSON.parse(JSON.stringify(toy)))
}

export const updateToy = async (toy: Toy) => {
    const { id } = toy
    const db = firebase.firestore().collection('toys').doc(`${id}`)
    const document = await db.get()
    if(document.exists){
      const parse: any = document.data()
      const updatedToy = {
          ...parse,
          ...toy
      }
      await db.set(JSON.parse(JSON.stringify(updatedToy)))
    }
}

export const deleteToy = async (toy_id: string) => {
    const db = firebase.firestore().collection('toys').doc(toy_id)
    await db.delete()
}

export default firebase;


