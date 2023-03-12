import { User } from '../models/userModel'
import {collection, doc, setDoc, addDoc} from "firebase/firestore"
import {db} from "../src/firebase/firebaseConfig"

export function createUser(data, uid) {
    const user = new User({
        name: data.nombre + " " + data.apellido,
        email: data.email
    })

    user.save(uid)    
}