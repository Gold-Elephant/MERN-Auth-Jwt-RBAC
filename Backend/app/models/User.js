// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

// Password hasher.
const bcryptSevice = require('#services/bcrypt.service');
const { hashPassword, comparePasswords } = require('../services/bcrypt.service');


const User = database.define(
	'User',
	{	
		firstName: {
			type: DataTypes.STRING(80),
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING(175),
			allowNull: true
		},
		userName: {
			type: DataTypes.STRING(175),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			unique: true,
			allowNull: false
		},
		mobileNumber: {
			type: DataTypes.STRING(175),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		lastLogin: {
			type: DataTypes.DATE(),
			allowNull: true
		},
		device: {
			type: DataTypes.STRING(175),
			allowNull: true
		},
		roleId: {
			type: DataTypes.INTEGER(11),
			defaultValue: 3,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(175),
			allowNull: true
		},
		// Example of virtual field:
	},
	{
		// Enable automatic 'createdAt' and 'updatedAt' fields.
		timestamps: true,
		// Only allow 'soft delete'
		// (set of 'deletedAt' field, insted of the real deletion).
		paranoid: false
	},
);

// Hooks:
User.beforeValidate((user, options) => {
	// Hash user's password.
	user.password = bcryptSevice.hashPassword(user);
})
// Hooks\

// Static methods:
User.associate = (models) => {
	models.User.hasMany(models.DisabledRefreshToken, {
		foreignKey: "UserId",
		as: 'disabledRefreshTokens'
	});
}

User.findById = function(id) {
	return this.findByPk(id);
}

User.findOneByEmail = function(email) {
	const query = {
		where: {
			email
		}
	};
	return this.findOne(query);
}
// Static methods\

// Instance methods:
User.prototype.toJSON = function() {
	const values = { ...this.get() };
	delete values.password;
	return values;
}
// Instance methods\

module.exports = User;
