import * as firebase from 'firebase'

async function turnOn(command) {
    await firebase.firestore().collection('command').doc('command').get()
        .then((doc) => {
            if(doc.exists) {
                return doc.ref.update({ isTurnedOn: command })
            } else {
                return e
            }
        })
        .catch((e) => {
            console.log(e);
        }) 
}

async function turnOff(command) {
    await firebase.firestore().collection('command').doc('command').get()
        .then((doc) => {
            if(doc.exists) {
                return doc.ref.update({ isTurnedOn: command })
            } else {
                return e
            }
        })
        .catch((e) => {
            console.log(e);
        }) 
}

async function lock(command) {
    await firebase.firestore().collection('command').doc('command').get()
        .then((doc) => {
            if(doc.exists) {
                return doc.ref.update({ isLocked: command })
            } else {
                return e
            }
        })
        .catch((e) => {
            console.log(e);
        }) 
}

async function unlock(command) {
    await firebase.firestore().collection('command').doc('command').get()
        .then((doc) => {
            if(doc.exists) {
                return doc.ref.update({ isLocked: command })
            } else {
                return e
            }
        })
        .catch((e) => {
            console.log(e);
        }) 
}

async function addListener(cb) {
    await firebase.firestore().collection('status').doc('status')
        .onSnapshot((doc) => {
            cb(doc.data())
    })
}

export { turnOn, turnOff, lock, unlock, addListener }