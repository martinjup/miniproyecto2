import { doc, setDoc } from "firebase/firestore"
import { db } from "../src/firebase/firebaseConfig"


export class User {
    constructor({ name, email}) {
        this.name = name
        this.email = email
    }


    save(uid) {
        const u = {
            name: this.name,
            email: this.email,
            id: uid
        }

        setDoc(doc(db, 'users', uid), u)

    }
}
