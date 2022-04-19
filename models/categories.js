const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    category: {
        type: String,
        required: true,
        unique: true
    }
},
{strictQuery: false}
)
module.exports =  mongoose.model('categories', categoriesSchema);