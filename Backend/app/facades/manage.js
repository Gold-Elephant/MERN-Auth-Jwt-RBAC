// Reference models.
const User = require('#models/User');

const { Err } = require('#factories/errors');


module.exports = {
	// Auth:
	create: _create,
	readInfo: _readInfo,
	update: _update,
	deleteInfo: _deleteInfo,
	roleUpdate: _roleUpdate
	// Add your methods here...

	// Private\
}

// Auth:
async function _create({ userInfo }) {
	try{
		// Try to create new user.
    const {firstName, lastName, userName, email, mobileNumber, password, roleId} = userInfo;
		const user = await User.create({
			firstName, lastName, userName, email, mobileNumber, password, roleId
		});
		const result = [
			user
		];
		// Send output.
		return Promise.resolve(result);
	}
	catch(error){
		return Promise.reject(error);
	}
}

async function _readInfo() {
	try{
		// Try to create new user.
    const data = await User.findAll();
		// Prepare output.
		const result = [
			data
		];
		// Send output.
		return Promise.resolve(result);
	}
	catch(error){
		return Promise.reject(error);
	}
}

async function _update({ userInfo }) {

	try{
		let id = userInfo.id
		const data = await User.findById(id);
		// Try to create new user.
    for (let key in userInfo) {
			data[key] = userInfo[key];
		}
		data.save();
		// Prepare output.
		
		// Send output.
		return Promise.resolve();
	}
	catch(error){
		return Promise.reject(error);
	}
}

async function _deleteInfo({ id }) {

	console.log(id);
	try{
		const res = await User.destroy({
			where: {
				id
			}
		});
		console.log(res);
	}
	catch(error){
		return Promise.reject(error);
	}
}

async function _roleUpdate({ userInfo }) {

	try{
		let id = userInfo.id
		const data = await User.findById(id);
		console.log("up=>", data.roleId);
		data.roleId = userInfo.role_value;
		data.save();
		// Prepare output.
		
		// Send output.
		return Promise.resolve();
	}
	catch(error){
		return Promise.reject(error);
	}
}