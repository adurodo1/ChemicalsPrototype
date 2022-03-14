import mongoose from "mongoose";
const Schema= mongoose.Schema;
export const ParameterSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    ppm: {
        type: Number,
        required: true
    },
    ph: {
        type: Number,
        required: true
    },
    cmt: {
        type: String,
        required: true
    }
     ,

     status:{
        type:String,
        required:false
     },
     created_date:{type:Date,default:Date.now},
     updated_date:{type:Date,default:Date.now}

}
// ,{
//     timestamps: true
// },{
//     collection: 'parameters'
// }
);


