//monster_leaking.js

var fs = require('fs');
var LEAKING = [];
for (var i = 1; i <= 1104; i++) {
  if (fs.existsSync('./MONS_' + i + '.png')) { // or fs.existsSync
    
  } else {
    LEAKING.push(i);
  }
}

console.log(LEAKING.length);
console.log(LEAKING);