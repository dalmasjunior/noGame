const admin = require('firebase-admin');

var serviceAccount = require('./noGame-6c8659a65b08.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
});

docRef.onSnapshot((doc) => {
    if (doc && doc.exists) {
        const myData = doc.data();
        console.log(myData.first);
    }
})
