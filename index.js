var sharp = require('sharp');
var path  = require("path");
var fs = require("fs");

function readImageFiles() {
    let uploadDir = path.join(__dirname , '..', 'uploads');
    fs.readdir(uploadDir, (err, filenames) => {
        filenames.map((file) => {
            let ext = path.extname(file);
            sharp(path.join(__dirname , '..', 'uploads',file))
                .resize(400,400)
                .toFile(path.join(__dirname , '..', 'uploads','new',file),function(err){
                    if(err){
                        console.log("Error");
                    }else{
                        console.log("Success");
                    }
                });
        })
    });
}


readImageFiles();