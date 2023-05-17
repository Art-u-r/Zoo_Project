'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Animal, {foreignKey: 'animal_id'})
    }
  }
  Animal.init({
    animalname: DataTypes.STRING,
    description: DataTypes.TEXT,
    mainImg: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};