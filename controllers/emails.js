"use strict";
// exports.__esModule = true;
// exports.Emails = void 0;
//var nodemailer = require('nodemailer');

import nodemailer from 'nodemailer';
var Emails = /** @class */ (function () {
    function Emails(message) {
        this.message = {};
        this.message = message;
        console.log(message);
    }
    Emails.prototype.send = function () {
        var transporter = nodemailer.createTransport({
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
        });
    };
    return Emails;
}());
export default  Emails;
