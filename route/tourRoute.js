/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
//const fs = require('fs');
const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

//router.param('id', tourController.checkId);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlans);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
