import { collection, doc, setDoc } from "firebase/firestore";
import { carouselImages } from "../store/restaurants.js";
import { db } from "./firebaseConfig.js";

const carouselData = carouselImages

const uploadData = async () => {
    try {
        for (let i = 0; i < carouselData.length; i++) {
            const { res_id, images } = carouselData[i];
            const cleanId = res_id.split("/").pop()

            const restaurantRef = doc(db, "restaurants", cleanId)

            const carouselRef = doc(collection(db, "carousel"), cleanId);

            await setDoc(carouselRef, { images, res_id: restaurantRef });
        }
        console.log("Data uploaded to firebase")
    } catch (error) {
        console.log("Error uploading to firebase: ", error)
    }
}

uploadData()