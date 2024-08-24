const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class BlogPost extends Model {}

BlogPost.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'blogpost',
});

module.exports = BlogPost;
