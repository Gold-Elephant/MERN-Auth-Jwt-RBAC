// Facades:
const manageFacade = require('#facades/manage');
const jwtFacade = require('#facades/jwt.facade');
// JWT Service.
const JWT = require('#services/jwt.service');
// Reponse protocols.
const { 
	createOKResponse,
	createErrorResponse
} = require('#factories/responses/api');
// Custom error.
const { Err } = require('#factories/errors');


module.exports = ManageController;

function ManageController() {
	// Auth:
	const _create = async (req, res) => {
		try {
			// Extract request input:
      const userInfo = req.body.userInfo;
      const [ createdUser ] = await manageFacade.create({
				userInfo
			});
		console.log('roleid=>', createdUser.roleId);

			res.send(createdUser);
		}
		catch(error) {
			console.error("ManageController._create error: ", error);
		}
	}
  const _readInfo = async (req, res) => {
		try {
			// Extract request input:
      const [ allData ] = await manageFacade.readInfo();
			res.send(allData);
		}
		catch(error) {
			console.error("ManageController._create error: ", error);
		}
	}


	const _update = async(req, res) => {
		const userInfo = req.body.userInfo;

		try {
			(userInfo);
			// Extract request input:
			await manageFacade.update({
				userInfo
			});

			res.send();
		}
		catch(error) {
			console.error("ManageController._create error: ", error);
		}

	}

	const _deleteInfo = async (req, res) => {
		try {
			let id = req.body.id;
			console.log("deletereq", id);
			// Extract request input:
      await manageFacade.deleteInfo({id});


			res.send('allData');
		}
		catch(error) {
			console.error("ManageController._create error: ", error);
		}
	}
	const _roleUpdate = async(req, res) => {
		const userInfo = req.body;
		console.log("rolereq=>", userInfo);
		try {
			// Extract request input:
			await manageFacade.roleUpdate({
				userInfo
			});

			res.send();
		}
		catch(error) {
			console.error("ManageController._create error: ", error);
		}

	}


	return {
		// Auth:
		create: _create,
    readInfo: _readInfo,
		update: _update,
		deleteInfo: _deleteInfo,
		roleUpdate: _roleUpdate
	
	}
} 