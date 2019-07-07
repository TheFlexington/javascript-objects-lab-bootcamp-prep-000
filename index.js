var obj = {key: value};

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = Object.assign(obj, {key[value]});
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  recipes.prop2 = 2;
  return recipes;
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

