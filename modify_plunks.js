var fs = require('fs'),
    path = require('path');

fs.readdir(__dirname, function (error, list) {
  list.forEach(getStat);
});

function getStat(item) {
  fs.stat(item, function (err, stat) {
    if (stat.isDirectory() && item[0] !== '.') {
      readPlunkFile(item);
    }
  });
}

function readPlunkFile(item) {
  var plunk;
  fs.readFile(item + '/.plunk', 'utf8', function (err, contents) {
    if (contents) {
      changeName(contents, item)
    }
  });
}

function changeName(contents, item) {
  plunk = JSON.parse(contents);
  plunk.name = item;

  fs.writeFile(item + '/.plunk', JSON.stringify(plunk), function (err) {
    if (err) console.error(err);
  });
}
