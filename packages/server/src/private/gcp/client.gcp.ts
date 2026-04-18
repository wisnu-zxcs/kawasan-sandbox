import { getApps, initializeApp, type FirebaseApp } from "firebase/app"
import { getAuth, type Auth } from "firebase/auth"
import { getFirestore, type Firestore } from "firebase/firestore"
import { env } from "./env.gcp.js"

function firebaseApp(): FirebaseApp {
    const apps = getApps()
    if (apps.length > 0) return apps[0]!

    return initializeApp({
        apiKey: env.firebase.apiKey,
        authDomain: env.firebase.authDomain,
        projectId: env.firebase.projectId,
        storageBucket: env.firebase.storageBucket,
        messagingSenderId: env.firebase.messagingSenderId,
        appId: env.firebase.appId
    })
}

export const app = firebaseApp()
export const auth: Auth = getAuth(app)
export const db: Firestore = getFirestore(app)