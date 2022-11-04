const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour name must be provided'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  groupSize: {
    type: Number,
    required: [true, 'A tour should have a group size']
  },
  price: {
    type: Number,
    required: [true, 'Tour price must be stated'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'Tour must have a summary'],
  },
  description: {
    type: String,
    trim: true
  },
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
