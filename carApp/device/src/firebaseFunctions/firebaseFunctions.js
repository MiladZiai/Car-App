import * as firebase from 'firebase'

async function addListener(cb) {
    await firebase.firestore().collection('command').doc('command')
        .onSnapshot((doc) => {
            cb(doc.data())
    })
}

async function updateStatus(engineStatus, lockStatus) {
    await firebase.firestore().collection('status').doc('status').get()
        .then((doc) => {
            if(doc.exists) {
                return doc.ref.update({ isTurnedOn: engineStatus, isLocked: lockStatus })
            } else {
                return e
            }
        })
        .catch((e) => {
            console.log(e);
        })
}

export { addListener, updateStatus }