var fs = require("fs")

function filteredLS(directory, extension, callback) {
  fs.readdir(directory, function readdirCallback(err, files) {
    if (err) {
      callback(err);
    } else {
      result = []
      files.forEach(function filesForEachCallback(file) {
        if (file.indexOf("." + extension) !== -1) {
          result.push(file)
        }
      });
      
      callback(null, result);
    }
  });
}

module.exports = filteredLS;