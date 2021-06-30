// Reference models.

const RoleAccess = require('#models/RoleAccess');
const Access = require('#models/Access');

// Custom error.
const { Err } = require('#factories/errors');


module.exports = {
	// Auth:
	readInfo: _readInfo,
	saveInfo: _saveInfo,
	// Add your methods here...

	// Private\
}



async function _readInfo(roleId) {
	try{
		// Try to create new user.
    const accessData = await Access.findAll({
      attributes: ['id', 'accessName']
    });
    const roleAccessData = [];
    for (let i = 0; i < accessData.length; i++) {
      const id = accessData[i].dataValues.id;
      const data = await RoleAccess.findOrCreate({
        where: { roleId: roleId, accessId: id},
        defaults: {
          permission: 0
        }
      });
      roleAccessData[i] = data;
    };
    // console.log(roleAccessData);
		// Prepare output.
		const result = {
      roleAccessData: roleAccessData,
			accessData: accessData
    };
		// Send output.
		return Promise.resolve(result);
	}
	catch(error){
		return Promise.reject(error);
	}
}
async function _saveInfo(data) {
	try{
    var roleId = data.roleId
    const result = [];
    for (let i = 0; i < data.accessData.length; i++) {
      var accessId = data.accessData[i].id
      if(data.viewCheck[i] && data.modifyCheck[i]) var permission = 2;
      else if(!data.viewCheck[i] && data.modifyCheck[i]) var permission = 2;
      else if(data.viewCheck[i] && !data.modifyCheck[i]) var permission = 1;
      else permission = 0;
      const res = await RoleAccess.update({
        permission:permission
      }, {
        where: {roleId: roleId,
          accessId: accessId
        }
      });
      console.log(res);
      result[i] = res
    }
		// Send output.
		return Promise.resolve(result);
	}
	catch(error){
		return Promise.reject(error);
	}
}