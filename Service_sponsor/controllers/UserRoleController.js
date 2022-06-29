const UserRole = require('../models/UserRole.js');
const db = require('../models')

exports.get = (req, res) => {
    const test = UserRole.findOne({
        where: {
            userId : req.body.userId
        }
    })
    res.send(test)
}