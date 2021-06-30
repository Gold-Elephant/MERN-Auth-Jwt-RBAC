const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

const Role = database.define(
	"Role",
	{
		roleName: {
			type: DataTypes.STRING(80),
			allowNull: true
		}
	}
);
Role.associate = (models) => {
}
module.exports = Role;