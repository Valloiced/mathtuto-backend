import { Firestore, addDoc, collection, getDocs } from "firebase/firestore";

class FirestoreService {
    private firestore: Firestore;

    constructor(firestore: Firestore) {
        this.firestore = firestore;
    }

    public async addDocument(collectionPath: string, data: any) {
        try {
            const collectionRef = collection(this.firestore, collectionPath);
            return await addDoc(collectionRef, data);
        } catch(error: any) {
            console.error("Error adding document", error.message);
            throw new Error(error);
        }
    }

    public async getDocuments(collectionPath: string) {
        try {
            const collectionRef = collection(this.firestore, collectionPath);
            return await getDocs(collectionRef);
        } catch(error: any) {
            console.error("Error adding document", error.message);
            throw new Error(error);
        }
    }
}

export default FirestoreService;