const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true , unique: true},
  level: { type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef" ]},
  ingredients: { type: Array},
  cuisine: {type: String, require: true},
  dishtype: {type: String, require: true},
  image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: {type: String, min:0},
  creator: {type: String},
  created: {type: Date, default: Date.now}
  });

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
