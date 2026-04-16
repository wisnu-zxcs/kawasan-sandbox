import { getApps, type ServiceAccount, type App, initializeApp, cert } from "firebase-admin/app"
import { getAuth, type Auth } from "firebase-admin/auth"
import { getFirestore, type Firestore } from "firebase-admin/firestore"

function firebaseAdminApp(): App {
    const apps = getApps()
    if (apps.length > 0) return apps[0]!

    const serviceAccount: ServiceAccount = {
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID!,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL!,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n")!
    }

    return initializeApp({
        credential: cert(serviceAccount)
    })
}

export const adminApp = firebaseAdminApp()
export const adminAuth: Auth = getAuth(adminApp)
export const adminDb: Firestore = getFirestore(adminApp)