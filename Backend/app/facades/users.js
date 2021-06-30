// Reference models.
const User = require('#models/User');
// JWT facade.
const JWT = require('#facades/jwt.facade');
// Password hash and compare service.
const bcrypt = require('#services/bcrypt.service');
// Custom error.
const sequelize = require('sequelize');

const { Err } = require('#factories/errors');
const { hashPassword, comparePasswords } = require('../services/bcrypt.service');
const RoleAccess = require('#models/RoleAccess');
const AccessLog = require('#models/AccessLog');


module.exports = {
	// Auth:
	register: _register,
	login: _login,
	// Auth\
	resetPassword: _resetPassword,
	// Private:
	getFullName: _getFullName

	// Add your methods here...

	// Private\
}

// Auth:
async function _register({ email, password }) {
	try{
		// Try to create new user.
		const user = await User.create({
			email,
			password
		});

		// Issue new access and refresh JWT.
		const [ tokens ] = await JWT.issueTokens({ user });

		// Prepare output.
		const result = [
			tokens,
			user
		];
		// Send output.
		return Promise.resolve(result);
	}
	catch(error){
		return Promise.reject(error);
	}
}

async function _login({ email, password, ip }) {
	try{
		const user = await User.findOneByEmail(email);
		const roleId= user.dataValues.roleId
		const roleData = await RoleAccess.findAll({ where: { roleId: roleId } });

		if (!user) {
			// If no such user was found, throw error with name UserNotFound:
			const err = new Err('User not found');
			err.name = "UserNotFound";
			throw err;
		}
		if (!bcrypt.comparePasswords(password, user.password)) {
			// Validation failed,
			// throw custom error with name Unauthorized:
			const err = new Err(`Validation failed.`);
			err.name = "ValidationError";
			throw err;
		}
		
		await AccessLog.create({
			userName: user.userName,
			device: ip
		});
		// Issue new access and refresh JWT.
		const [ tokens ] = await JWT.issueTokens({ user });
		console.log(tokens);

		// Prepare output.
		const result = [
			tokens,
			user,
			roleData
		];
		// Send output.
		const date = new Date();
		user.lastLogin = date
		user.device = ip 
		user.save();
		
		return Promise.resolve(result);
	}
	catch(error){
		return Promise.reject(error);
	}
}
// Auth\

// Private:
async function _getFullName({ userId }) {
	try{
		// Try to find user.
		const user = await User.findById(userId);

		if (!user) {
			// If no such user was found, throw error with name UserNotFound:
			const err = new Err('User not found');
			err.name = "UserNotFound";
			throw err;
		}

		// Get value of virtual field 'fullName'.
		const fullName = user.fullName;

		// Send output.
		return Promise.resolve([ fullName ]);
	}
	catch(error){
		return Promise.reject(error);
	}
}

async function _resetPassword({email}) {
	try{
		const user = await User.findOneByEmail(email);
		if (!user) {
			const err = new Err('User not found');
			err.name = "UserNotFound";
			throw err;
		}
		await User.update({password: '12345678'},{where:{email: email}});
		// user.password = '12345678';
		// await user.save();
		return Promise.resolve(['12345678']);
	}
	catch(error) {
		return Promise.reject(error);
	}
}
// Private\
