const mongoose= require('mongoose');

const url='mongodb+srv://sayyedabis110:pakistanmurdabad@cluster0.fqxobfm.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)
 .then((result) => {
//console.log(result);
    console.log('database connected');
    
 }).catch((err) => {
    console.error(err);
 });



module.exports=mongoose;