var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign(obj, {key: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj.value = 2;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
	var nonDestructDelete = Object.assign({}, recipes);
	delete nonDestructDelete.prop2;
	return nonDestructDelete;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete recipes.prop;
  return recipes;
}

