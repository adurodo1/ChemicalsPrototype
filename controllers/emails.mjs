// var nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';
export class Emails {
    constructor(message) {
        this.message = {};
        this.message = message;
        console.log(message);
    }
    send() {
        const transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            secureConnection: false,
            port: 587,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: 'kingolaribigbe@outlook.com',
                pass: 'Saheed22#'
            }
        });
        console.log("email working   " + this.message.name);
        transporter.sendMail({
            from: 'kingolaribigbe@outlook.com',
            to: 'kingolaribigbe@gmail.com',
            subject: 'Test Email Subject',
            text: this.message.name + " " + this.message.ppm
        }, (err, info) => { console.log(info.envelope); });
        //notify tracker
        //a tracker is a list of tq id
        // contains a function call trigger, once called it sends a message to emails 
    }
}
