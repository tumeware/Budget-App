import * as firebase from "firebase"
import "firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Toaster } from "../components"

export async function registration(email: String, password: String, navigation: { replace: (arg0: string) => void }) {
  await firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(async (userCredential: any) => {
    AsyncStorage.setItem('userId', userCredential.user.uid)
    console.log(userCredential.user.uid)
    navigation.replace('Loader')
  })
  .catch((error: { message: any }) => {
    Toaster(error.message, "warning")
  })
}

export async function SignIn(email: String, password: String, navigation: { replace: (arg0: string) => void }) {
  await firebase.auth().signInWithEmailAndPassword(email, password)
  .then(async (res: { user: any }) => {
    AsyncStorage.setItem('userId', res.user.uid)
    navigation.replace('Loader')
  })
  .catch((error: { message: any }) => {
    Toaster(error.message, "warning")
  })
}

export async function loggingOut(navigation: { replace: Function, pop: Function }) {
  await firebase.auth().signOut()
  .then(async () => {
    AsyncStorage.removeItem('userId')
    navigation.pop()
    navigation.replace('Loader')
  })
  .catch((error: { message: any }) => {
    Toaster(error.message, "warning")
  })
}

export async function resetMail(email: String, navigation: { replace: (arg0: string) => void }) {
  await firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    navigation.replace('Loader')
  })
  .catch((error: { message: any }) => {
    Toaster(error.message, "warning")
  })
}

export async function RemoveAccount(password: String, navigation: { replace: Function, pop: Function }) {
  const user = firebase.auth().currentUser
  const credential = firebase.auth.EmailAuthProvider.credential(
    user.email, 
    password
  )
  await user.reauthenticateWithCredential(credential)
  await user.delete()
  .then(() => {
    AsyncStorage.removeItem('userId')
    navigation.pop()
    navigation.replace('Loader')
  })
  .catch((error: { message: any }) => {
    Toaster(error.message, "warning")
  })
}