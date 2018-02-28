const admin = require('./../admin');
const db = admin.firestore();
class User {
    create(req, res, cb) {
        var user = req.body;
        var docRef = db.collection('users').doc(user.username);
        docRef.set(user).then(() => {
            res.status(200).json({user: 'saved'});
        });
    }
}

module.exports = new User;