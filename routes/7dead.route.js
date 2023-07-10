'use strict';

const express = require('express');
const { SevDeadCharacter } = require('../models/index.model');

const router = express.Router();

router.get('/SevDeadCharacter', getSevDeadCharacters);
router.get('/SevDeadCharacter/:id', getOneSevDeadCharacter);
router.post('/SevDeadCharacter', createSevDeadCharacter);
router.put('/SevDeadCharacter/:id', updateSevDeadCharacter);
router.delete('/SevDeadCharacter/:id', deleteSevDeadCharacter);

// all route handlers are async because we interact w database

const getSevDeadCharacters = async (req, res) => {
    //search db and recieve all games
    let allGames = await SevDeadCharacter.findAll();
    res.status(200).json(allGames);
};

const getOneSevDeadCharacter = async (req, res) => {
    //search db and recieve one game
    let id = parseInt(req.params.id);
    let recievedGame = await SevDeadCharacter.findOne({where: {id : id} });
    res.status(200).json(recievedGame);
}

const createSevDeadCharacter = async (req, res) => {
    //add one game to the db
    let newGame = req.body;
    let addedGame = await SevDeadCharacter.create(newGame);
    res.status(200).json(addedGame);
};

const updateSevDeadCharacter = async (req, res) => {
    //update an existing game(row) in the db
    let id = parseInt(req.params.id);
    let newGameInfo = req.body;
    let gameToUpdate = await SevDeadCharacter.findOne({where : {id} });
    let updatedGame = await gameToUpdate.update(newGameInfo);
    res.status(200).json(updatedGame);
};

const deleteSevDeadCharacter = async (req, res) => {
    //remove a game from the db
    let id = parseInt(req.params.id);
    let deletedGame = await SevDeadCharacter.destroy({where : {id} });
    res.status(204).json(deletedGame);
};

module.exports = router;