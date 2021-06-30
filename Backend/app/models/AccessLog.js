const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

const AccessLog = database.define(
	"AccessLog",
	{
		userName: {
			type: DataTypes.STRING(175),
			allowNull: true
		},
    device: {
			type: DataTypes.STRING(175),
			allowNull: true
		}
	}
);

AccessLog.associate = models => {
}

module.exports = AccessLog;