module.exports = {
	'POST /user/create': 'ManageController.create',
	'POST /user/readInfo': 'ManageController.readInfo',
	'POST /user/update': 'ManageController.update',
	'POST /user/deleteInfo': 'ManageController.deleteInfo',
	//----Role Manage ----------------------
	'POST /role/update': 'ManageController.roleUpdate',
	//Access Manage----------------------
	'POST /access/readInfo': 'AccessController.readInfo',
	'POST /access/saveInfo': 'AccessController.saveInfo',
};
