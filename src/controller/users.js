const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        res.json({
            message: 'GET all user success',
            data: data,
        })
    } catch (error) {
        res.status(404).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}
const createNewUser = async (req, res) => {
    const { body } = req;
    try {
        await UsersModel.createNewUser(body);
        res.json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(404).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await UsersModel.updateUser(body, id);
        res.json({
            message: 'UPDATE  user success',
            data: {
                id: id,
                ...body
            },
        })
    } catch (error) {
        res.status(404).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

const deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: 'DELETE  user success',
            data: null
        })
    } catch (error) {
        res.status(404).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }