const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const { default: SendmailTransport } = require("nodemailer/lib/sendmail-transport");



const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//post middleware
fileSchema.post("save", async function(doc){
    try{
        console.log("DOC", doc)

        //transporter
        let transporter = nodemailer.transporter({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,

            },


         });

         //send mail

         //Too shift this config under config folder
         let info = await transporter.sendMail({
            from:`SuhailApp - by Your Buddy`,
            to:doc.email,
            subject: "New File Uploaded on Cloudinary",
            html:`<h2>Hello jee<h2> <p>Dear Mr.Khan Your File Uploded Successfully.<p>`,

         })
         console.log("INFO", info);

        }

    catch(error){
        console.error(error);

    }
})







const File = mongoose.model("File", fileSchema);
module.exports = File;