var filteredLS = require("./filtered_ls.js");

var directory = process.argv[2];
var extension = process.argv[3];

filteredLS(directory, extension, function filteredLSCallback(err, files) {
  files.forEach(function filteredFilesForEachCallback(err, file) {
    if (err) {
      console.log(err);
    } else {
      console.log(file);
    }
  });
});