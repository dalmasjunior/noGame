const admin = require('firebase-admin');

var serviceAccount = require('./noGame-6c8659a65b08.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;