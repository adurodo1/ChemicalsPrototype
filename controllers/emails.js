var nodemailer = require('nodemailer');
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
        });
    }
}
