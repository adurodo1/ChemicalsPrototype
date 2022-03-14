import mongoose  from "mongoose";

import {ParameterSchema} from '../models/parameterModel.mjs';
import {alertSchema} from '../models/alertModel.mjs'

import  {Emails} from "./emails.mjs";

 

import io from '../index.mjs'



const Parameter= mongoose.model('Parameter',ParameterSchema);
const Alerts= mongoose.model('ParameterAlert',ParameterSchema);

export const addNewEntry =(req,res) =>{
    let newParams = new Parameter(req.body);

    newParams.save((err,param)=>{
        if(err){
            res.send(err)
        }
        
        console.log(param)
        io.emit('NewEntry', {new:req.body});//Emits the Alert
        res.json(param);
    });
}

export const getParameter =(req,res) =>{
 

    Parameter.find().sort({ _id: -1}).exec((err,param)=>{
        if(err){
            res.send(err)
        }
        res.json(param);
    });
}

export const getParameterwithID =(req,res) =>{
 

    Parameter.findById(req.params.ParameterId,(err,param)=>{
        if(err){
            res.send(err)
        }
        res.json(param);
    });
}


export const updateParameter =(req,res) =>{
 

    Parameter.findOneAndUpdate({id_:req.params.ParameterId},req.body,{new:true},(err,param)=>{
        if(err){
            res.send(err)
        }
        res.json(param);
    });
}



export const deleteParameter =(req,res) =>{
 

    Parameter.deleteOne({id_:req.params.ParameterId},(err,param)=>{
        if(err){
            res.send(err)
        }
        res.json(param);
    });
}



export const sendEmail =async (req,res) =>{
 
 var email = new Emails(req.body);

 let newAlerts = new Alerts(req.body);

 newAlerts.save((err,param)=>{
     if(err){
         res.send(err)
     }
     
     console.log(param)
     await io.emit('AlertEvent', {alert:param});//Emits the Alert
    // res.json(param);
 });

 //await email.send();


 console.log(param)
   
}