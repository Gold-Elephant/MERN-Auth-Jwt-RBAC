const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

const Access = database.define(
	"Access",
	{
		accessName: {
			type: DataTypes.STRING(80),
			allowNull: true
		}
	}
);
Access.associate = (models) => {
}
module.exports = Access;