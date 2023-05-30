const mongoose=require('mongoose')

const userDataSchema=mongoose.Schema({
          name:{
                    required:true,
                    type:String
          },
          email:{
                    required:true,
                    type:String
          },
          password:{
                    required:true,
                    type:String
          }
})
const userDataModel=mongoose.model('UserData',userDataSchema);
module.exports=userDataModel;