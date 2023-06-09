'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Animal, {foreignKey: 'animal_id'})
    }
  }
  Gallery.init({
    image: DataTypes.STRING,
    animal_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gallery',
  });
  return Gallery;
};