import { collection, doc, getDoc, getFirestore } from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfwhUCmbT9bJ3Muq0ENELqOEtyy2AzkIk",
  authDomain: "pruebapiguarte.firebaseapp.com",
  projectId: "pruebapiguarte",
  storageBucket: "pruebapiguarte.appspot.com",
  messagingSenderId: "676651161084",
  appId: "1:676651161084:web:61f4048fab5fee65b2ce79"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export async function getProducto(productoid){
    const productCollection = collection(db, "PruebaPiguarte");
    const ref = doc(productCollection, productoid)
    
    const snapshot = await getDoc (ref)
    
    const myProduct = {
        ...snapshot.data(),
        id: snapshot.id
    }
/*     console.log("myProduct", myProduct)
 */    return myProduct;
}

export default db;