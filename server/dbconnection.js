const mongoose=require('mongoose');

const dbconnect=()=>{
        return mongoose.connect('mongodb+srv://surajsinghc423:surajsingh@cluster01.yuemep0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01');
}

module.exports = dbconnect;
