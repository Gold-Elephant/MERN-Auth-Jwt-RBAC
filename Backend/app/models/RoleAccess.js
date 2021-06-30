const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

const RoleAccess = database.define(
	"RoleAccess",
	{
		roleId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
    accessId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
    permission: {
			type: DataTypes.INTEGER(11),
			defaultValue: 0,
			allowNull: true
		}
	}
);

RoleAccess.associate = models => {
	
}

module.exports = RoleAccess;