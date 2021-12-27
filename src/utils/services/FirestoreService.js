import { db } from '../firestore'

function getAllMenuItems() {
    return new Promise((resolve, reject) => {
        db.collection("MenuItems").get().then((allMenuItems) => {
            resolve(allMenuItems);
        }).catch((e) => {
            reject(e);
        })
    })
}

function getAllMenuCategories() {
    return new Promise((resolve, reject) => {
        db.collection("MenuCategories").get().then((allMenuCategories) => {
            resolve(allMenuCategories);
        }).catch((e) => {
            reject(e);
        })
    })
}

function AddNewMenuItem(itemName, itemCategory, itemPrice) {
    return new Promise((resolve, reject) => {
        const data = {
            "itemName": itemName,
            "itemCategory": itemCategory,
            "itemPrice": parseFloat(itemPrice)
        }

        db.collection("MenuItems").add(data).then((docRef) => {
            resolve(docRef);
        }).catch((e) => {
            reject(e);
        })

    })
}

export default { getAllMenuItems, getAllMenuCategories, AddNewMenuItem }