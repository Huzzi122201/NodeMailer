# Email Sender MVC Application

A simple MVC application built with Node.js, Express, and Nodemailer for sending emails.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Rename `.env` file and update with your email credentials:
   - For Gmail, you'll need to:
     - Enable 2-factor authentication
     - Generate an App Password
     - Use that App Password in the .env file

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

## Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Features

- Simple and clean UI
- Email sending functionality
- Form validation
- Success/Error messages
- MVC architecture

## Structure

```
├── app.js              # Application entry point
├── models/            
│   └── Email.js        # Email model with Nodemailer configuration
├── controllers/
│   └── emailController.js # Email controller logic
├── routes/
│   └── emailRoutes.js    # Route definitions
├── views/
│   └── email-form.ejs    # Email form template
└── .env                # Environment variables
``` 