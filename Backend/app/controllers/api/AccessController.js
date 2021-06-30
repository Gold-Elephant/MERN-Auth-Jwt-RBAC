// Facades:
const access = require('#facades/access');

const { Err } = require('#factories/errors');


module.exports = AccessController;

function AccessController() {
	// Auth:

  const _readInfo = async (req, res) => {
		try {
			// Extract request input:
      const data  = await access.readInfo(req.body.roleId);
			res.send(data);
		}
		catch(error) {
			console.error("ManageController._create error: ", error);
		}
	}

	const _saveInfo = async (req, res) => {
		try {
			// Extract request input:
      const data  = await access.saveInfo(req.body.data);
			res.send(data);
		}
		catch(error) {
			console.error("ManageController._create error: ", error);
		}
	}

	return {
		// Auth:
    readInfo: _readInfo,
		saveInfo: _saveInfo
	
	}
} 