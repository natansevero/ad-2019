const nodemailer = require('nodemailer');

const mailserver = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.USER_MAIL_SERVER,
        pass: process.env.PASS_MAIL_SERVER
    }
}

const FROM = 'noreply@ad-2019.com';
const SUBJECT = 'Resultado do sorteio do amigo secreto';
const BODY = `
    <div>
        Olá <strong>{0}</strong>. Seu amigo(a) secretro é <strong>{1}</strong>.
    </div>
`;

const transporter = nodemailer.createTransport(mailserver);

exports.send = (personName, to, friendName) => {
    const message = {
        from: FROM,
        to: to,
        subject: SUBJECT,
        html: BODY.replace('{0}', personName).replace('{1}', friendName)
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
            throw error;
        }
    })
}