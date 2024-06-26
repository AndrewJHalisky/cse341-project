const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then(users => {
        res.setHeader('Content-Type','application/json');
        res.status(200).json(users)
    })
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('users').find({_id: userId});
    result.toArray().then(users => {
        res.setHeader('Content-Type','application/json');
        res.status(200).json(users[0])
    })
};

const createUser = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const response = await mongodb.getDatabase().db().collection('users').insertOne({user})
    if (response.acknowledge > 0) {
    res.status(204).send() }
        else {
            res.status(500).json(response.error || `An error occured while updating the user.`)
        }
    };

const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const user = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        ipaddress: req.body.ipaddress
    }
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({user}, user)
    if (response.modifiedCount > 0) {
    res.status(204).send() }
        else {
            res.status(500).json(response.error || `An error occured while updating the user.`)
        }
}

const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().remove({_id: userId}, true);
    if (response.modifiedCount > 0) {
        res.status(204).send() } 
        else {
            application.listen(port, () => (console.log(`Database is listening and node is Running on port ${port}`)));
        }
    }



module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
}