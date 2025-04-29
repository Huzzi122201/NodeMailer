const nodemailer = require('nodemailer');

class Email {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    async sendEmail(to, subject, text) {
        try {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to,
                subject,
                text
            };

            const info = await this.transporter.sendMail(mailOptions);
            return { success: true, messageId: info.messageId };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

module.exports = new Email(); 