function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomString (length, characters) {
   	var result = '';
   	if (characters == null)
		characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

   	var charactersLength = characters.length;

   	for ( var i = 0; i < length; i++ )
      	result += characters.charAt(Math.floor(Math.random() * charactersLength));

   return result;
}

function getRandomDouble (min, max, decimals) {
	if (decimals == null) decimals = 2;
	return (Math.random() * (max - min) + min).toFixed(decimals)
}

function getRandomItemList (list) {
	return list[getRandomInt(0, list.length -1)];
}

function getRandomBool () {
	return (getRandomInt(0, 1) == 1);
}

function getRandomHexColor () {
   return getRandomString(6, "ABCDEF1234567890");
}

function getRandomRgbColor () {
	var r = getRandomInt(0, 255);
	var g = getRandomInt(0, 255);
	var b = getRandomInt(0, 255);
	return {"r":r, "g":g, "b":b};
}



exports.getRandomHexColor = getRandomHexColor;
exports.getRandomInt = getRandomInt;
exports.getRandomString = getRandomString;
exports.getRandomRgbColor = getRandomRgbColor;
exports.getRandomBool = getRandomBool;
exports.getRandomDouble = getRandomDouble;
exports.getRandomListItem = getRandomListItem;