'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hest = sequelize.define('Hest', {
    navn: DataTypes.STRING,
    race: DataTypes.STRING,
    alder: DataTypes.INTEGER,
    alive: DataTypes.BOOLEAN
  }, {});
  Hest.associate = function(models) {
    // associations can be defined here
  };
  return Hest;
};