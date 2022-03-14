import mongoose  from "mongoose";

import {ParameterSchema} from '../models/parameterModel.mjs';

import  {Emails} from "./emails.mjs";

 

import io from '../index.mjs'



const Parameter= mongoose.model('Parameter',ParameterSchema);

export const addNewEntry =(req,res) =>{
    let newPlayer = new Parameter(req.body);

    newPlayer.save((err,param)=>{
        if(err){
            res.send(err)
        }
        res.json(param);
    });
}

export const getParameter =(req,res) =>{
 

    Parameter.find().sort({ _id: -1},(err,param)=>{
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

 //await email.send();
 io.emit('AlertEvent', {alert:req.body});//Emits the Alert

 console.log(req.body)
   
}