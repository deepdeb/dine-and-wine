import { collection, doc, setDoc } from "firebase/firestore";
import { restaurants } from "../store/restaurants.js";
import { db } from "./firebaseConfig.js";

const restaurantData = restaurants

const uploadData = async () => {
    try {
        for(let i=0; i<restaurantData.length; i++){
            const restaurant = restaurantData[i];
            const docRef = doc(collection(db, "restaurants"), `restaurant_${i+1}`);
            await setDoc(docRef, restaurant);
        }
        console.log("Data uploaded to firebase")
    } catch (error) {
        console.log("Error uploading to firebase: ", error)
    }
}

uploadData()