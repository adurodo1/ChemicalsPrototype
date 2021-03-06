import mongoose from "mongoose";
const Schema= mongoose.Schema;
export const alertSchema= new Schema({
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
    query: {
        type: String,
        required: true
    }
     ,
     created_date:{type:Date,default:Date.now},
     updated_date:{type:Date,default:Date.now}

}
// ,{
//     timestamps: true
// },{
//     collection: 'parameters'
// }
);


