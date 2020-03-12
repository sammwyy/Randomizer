# Randomizer
Javascript lib for get random values

## Usage:
### Random Integer
Get a random integer between two numbers (Range)  
```javascript
getRandomInt(1, 20);
```

### Random String
Get a random string with specific length
```javascript
getRandomString(20);
```

### Random String with Specific characters
Get a random string with specific length and characters
```javascript
getRandomString(10, "ABCDEF");
```

### Random Double
Get a random double between two numbers (Range)
```javascript
getRandomDouble(1. 5);
```

### Random Double with specific decimals amount
Get a random double beetween two numbers (Range) with specific amount of decimals
```javascript
getRandomDouble(1, 5, 4); // 4 Decimals
```

### Random Item List
Get a random element in to a list
```javascript
getRandomItemList(list);
```

### Random Boolean
Get a boolean with random value (true/false)
```javascript
getRandomBool();
```

### Get Random Color (Hex)
Get a random HEX Code color
```javascript
getRandomHexColor();
```

### Get Random Color (RGB)
Get a object with random RGB values
```javascript
var rgb = getRandomRgbColor();

var red = rgb.r;
var green = rgb.g;
var blue = rgb.b;
```
