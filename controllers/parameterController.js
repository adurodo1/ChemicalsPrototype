import mongoose  from "mongoose";

import {ParameterSchema} from '../models/parameterModel.js';

import  Emails from "./emails.js";

//var Emails= require('./emails.js').Emails;

import io from '../index.js'



const Parameter= mongoose.model('Parameter',ParameterSchema);

export const addNewEntry =(req,res) =>{
    let newPlayer = new Parameter(req.body);

    newPlayer.save((err,player)=>{
        if(err){
            res.send(err)
        }
        res.json(player);
    });
}

export const getParameter =(req,res) =>{
 

    Parameter.find({},(err,player)=>{
        if(err){
            res.send(err)
        }
        res.json(player);
    });
}

export const getParameterwithID =(req,res) =>{
 

    Parameter.findById(req.params.ParameterId,(err,player)=>{
        if(err){
            res.send(err)
        }
        res.json(player);
    });
}


export const updateParameter =(req,res) =>{
 

    Parameter.findOneAndUpdate({id_:req.params.ParameterId},req.body,{new:true},(err,player)=>{
        if(err){
            res.send(err)
        }
        res.json(player);
    });
}



export const deleteParameter =(req,res) =>{
 

    Parameter.deleteOne({id_:req.params.ParameterId},(err,player)=>{
        if(err){
            res.send(err)
        }
        res.json(player);
    });
}



export const sendEmail =async (req,res) =>{
 
 var email = new Emails(req.body);

 //await email.send();
 io.emit('AlertEvent', {alert:req.body});//Emits the Alert

 console.log(req.body)
   
}