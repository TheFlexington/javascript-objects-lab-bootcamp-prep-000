var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign(obj);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = 2;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
	var nonDestructDelete = Object.assign({}, recipes);
	delete nonDestructDelete.prop2;
	return nonDestructDelete;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}

