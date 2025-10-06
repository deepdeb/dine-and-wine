import { collection, doc, setDoc } from "firebase/firestore";
import { slots } from "../store/restaurants.js";
import { db } from "./firebaseConfig.js";

const slotData = slots

const uploadData = async () => {
    try {
        for (let i = 0; i < slotData.length; i++) {
            const { ref_id, slot } = slotData[i];
            const cleanId = ref_id.split("/").pop()

            const restaurantRef = doc(db, "restaurants", cleanId)

            const slotRef = doc(collection(db, "slot"), cleanId);

            await setDoc(slotRef, { slot, ref_id: restaurantRef });
        }
        console.log("Data uploaded to firebase")
    } catch (error) {
        console.log("Error uploading to firebase: ", error)
    }
}

uploadData()