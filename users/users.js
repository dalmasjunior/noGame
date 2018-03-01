const admin = require('./../admin');
const db = admin.firestore();
const docRef = db.collection('users');

class User {
    create(req, res, cb) {
        var user = req.body;
        var newUser = docRef.doc();
        docRef.set(user).then(() => {
            res.status(200).json({user: 'saved'});
        });
    }

    find(user) {        
        docRef.where('username', '==', user.username).get().then(value => {
            value.forEach(doc => {
                console.log(doc.data());
                console.log(doc.id);
                // console.log(doc.username);
                // console.log(doc.pwd);
            });
        }).catch(err => {
            res.status(400).json(err);
        })
    }

    login(req, res) {

    }
}

module.exports = new User;