const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  product: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId, ref: 'categories',
    required: true
  },
});

module.exports = mongoose.model('products', productsSchema);