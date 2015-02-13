var fs = require('fs');

module.exports = function(path, callback) {
  fs.readFile(path, 'utf-8', function(error, data) {
    if (error) {
      return callback(error);
    }

    try {
      data = JSON.parse(data);
      callback(null, data);
    } catch (error) {
      return callback(error);
    }
  });
};
