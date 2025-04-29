const Email = require('../models/Email');

class EmailController {
    // Render the email form
    getEmailForm(req, res) {
        res.render('email-form');
    }

    // Handle email sending
    async sendEmail(req, res) {
        const { to, subject, text } = req.body;

        if (!to || !subject || !text) {
            req.flash('error', 'Please fill in all fields');
            return res.redirect('/');
        }

        try {
            const result = await Email.sendEmail(to, subject, text);
            
            if (result.success) {
                req.flash('success', 'Email sent successfully!');
            } else {
                req.flash('error', 'Failed to send email: ' + result.error);
            }
        } catch (error) {
            req.flash('error', 'An error occurred while sending the email');
        }

        res.redirect('/');
    }
}

module.exports = new EmailController(); 