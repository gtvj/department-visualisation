const fs = require("fs");

fs.readdir("public/data", (err, files) => {
    if (err) { throw err; }

    exports.department_codes = files.map((file) => file.replace('.js', ''));

});

