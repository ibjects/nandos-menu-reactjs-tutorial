import { db } from '../firestore'

function getAllMenuItems() {
    return new Promise((response, reject) => {
        db.collection("MenuItems").get().then((allMenuItems) => {
            response(allMenuItems);
        }).catch((e) => {
            reject(e);
        })
    })
}

export default { getAllMenuItems }