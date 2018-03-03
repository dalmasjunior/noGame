const admin = require('./../admin');
const db = admin.firestore();

class User {
    create(req, res, cb) {
        var docRef = db.collection('users');
        var user = req.body;
        var newUser = docRef.doc();
        docRef.add(user).then((                          ) => {
            res.status(200).json({user: 'saved'});
        });
    }

    find(user, cb) {        
        var docRef = db.collection('users');
        docRef.where('username', '==', user.username).get().then(value => {
            var userObj = {};
            if (value.docs.length != 0) {
                userObj = value.docs[0].data();
                userObj.id = value.docs[0].id; 
            }
            cb(userObj);
        });
    }

    login(req, res) {
        this.find(req.body, (user) => {
            if (user.id && (user.password === req.body.password)) {
                res.status(200).json(user);
            } else {
                res.status(400).json({error: "User or password are invalid!"});
            }
        });        
    }
}

module.exports = new User;