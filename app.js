require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session and Flash middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 } // 1 minute
}));
app.use(flash());

// Flash middleware
app.use((req, res, next) => {
    const successMessages = req.flash('success');
    const errorMessages = req.flash('error');
    
    res.locals.message = Array.isArray(successMessages) ? successMessages[0] : successMessages;
    res.locals.error = Array.isArray(errorMessages) ? errorMessages[0] : errorMessages;
    next();
});

// Routes
app.use('/', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 