'use strict';

const express = require('express');

const { MealCollection } = require('../models/index.model.js');

const router = express.Router();

// RESTful route declarations
router.get('/Meal', getMeals);
router.get('/Meal/:id', getOneMeal);
router.post('/Meal', createMeal);
router.put('/Meal/:id', updateMeal);
router.delete('/Meal/:id', deleteMeal);