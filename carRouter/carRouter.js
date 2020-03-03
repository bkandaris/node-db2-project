const express = require('express');
// import db file here

const router = express.Router();
const db = require('../data/config');

router.get('/', async (req, res, next) => {
  try {
    const cars = await db('cars');
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const cars = await db('cars')
      .where({ id })
      .first();

    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        message: 'Need car info'
      });
    }

    const carData = req.body;
    const [id] = await db('cars').insert(carData);
    const newCar = await db('cars').where({ id });

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
