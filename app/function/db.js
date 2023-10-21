import {auth, DB} from '../../firebaseConfig';
import {addDoc, collection, setDoc, doc, getDoc, deleteDoc, getDocs, query, where, updateDoc} from 'firebase/firestore';

export async function createDB () {
    try {
        const user = auth.currentUser;

        await setDoc(doc(DB, "User", user.uid, 'gptBrain', 'default'), {
            role : 'Using only the correct words that are asked, you should answer the question, whether you are using what you have learned or using the current Internet search, and no sentences should be said. You have to answer only in words without formal letters. You should also answer in Korean with as many correct answers as possible. You must answer with words only and print {모르겠다...} when it is difficult to answer.',
            state : true
        })
    } catch (e) {
        console.log(e);
    }
}

export async function getRole () {
    const user = auth.currentUser;

    if(user != null) {
        const Ref = collection(DB, "User", user.uid, "gptBrain");
        const question = query(Ref, where("state", "==", true));
        const result = await getDocs(question);

        const doc = result.docs[0];
        const data = doc.data();

        return data.role;
    }
    else {
        return 'Using only the correct words that are asked, you should answer the question, whether you are using what you have learned or using the current Internet search, and no sentences should be said. You have to answer only in words without formal letters. You should also answer in Korean with as many correct answers as possible. You must answer with words only and print {모르겠다...} when it is difficult to answer.'
    }
}

export async function getNowRole () {
    const user = auth.currentUser;

    const Ref = collection(DB, "User", user.uid, "gptBrain");
    const question = query(Ref, where("state", "==", true));
    const result = await getDocs(question);

    const doc = result.docs[0];
    const data = doc.id;

    return data.toString();
}

export async function getAllrole () {
    try {
        const user = auth.currentUser;
        const array = [];

        const allRole = await getDocs(collection(DB, "User", user.uid, "gptBrain"));

        allRole.forEach((data) => {
            array.push(data.id);
        })
        return array;

    } catch (e) {
        console.log(e);
    }
}

export async function setRole (title, setrole) {
    try {
        const user = auth.currentUser;

        await setDoc(doc(DB, "User", user.uid, 'gptBrain', title), {
            role : setrole,
            state : false
        });
    } catch (e) {
        console.log(e);
    }
}

export async function setNowRole(role) {
    try {
        const user = auth.currentUser;

        const Ref = collection(DB, "User", user.uid, "gptBrain");
        const question = query(Ref, where("state", "==", true));
        const result = await getDocs(question);
        const nowdoc = result.docs[0];

        await updateDoc(doc(DB, "User", user.uid, "gptBrain", nowdoc.id), {
            state : false
        });

        await updateDoc(doc(DB, "User", user.uid, "gptBrain", role), {
            state : true
        });
    } catch (e) {
        console.log(e);
    };
}

export async function deleteRole (role) {
    const user = auth.currentUser;

    try {
        const Ref = collection(DB, "User", user.uid, "gptBrain");
        const question = query(Ref, where("state", "==", true));
        const result = await getDocs(question);
    
        const nowdoc = result.docs[0];
        const data = nowdoc.id;
        const now = data.toString();

        if(now == role) {
            await updateDoc(doc(DB, "User", user.uid, "gptBrain", "default"), {
                state : true
            });

            await deleteDoc(doc(DB, "User",  user.uid, "gptBrain", role));
        }
        else {
            await deleteDoc(doc(DB, "User",  user.uid, "gptBrain", role));
        }
    } catch (e) {
        console.log(e);
    };
};