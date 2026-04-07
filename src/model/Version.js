const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Version = sequelize.define('Version', {
  VersionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Version: {
    type: DataTypes.STRING(50),
  },
}, {
  tableName: 'Version',
  timestamps: false,
});

module.exports = Version;
