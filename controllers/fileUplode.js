const File = require("../models/File");

//local fileuplode => handler function

exports.localFileUpload = async (req, res) =>{
    try{
        //fetch file
        const file = req.files.file;
        console.log("FILE AAGYI JEE ->", file);

        let path = __dirname +"/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH->", path)

       // add path to the move function
        file.mv(path , (err) =>{
            console.log(err);
        });

        //create a successful response
        res.json({
            success:true,
            message:'Local File Uploaded Successfully'
        })
    }
    catch(error){
        console.log("Not able to upload file on the server")
        console.log(error);

    }
}