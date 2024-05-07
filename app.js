/*
 * 'require' is similar to import used in Java and Python. It brings in the libraries required to be used
 * in this JS file.
 * */
const express = require("express");
const { engine } = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const Handlebars = require("handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");

/*
 * Creates an Express server - Express is a web application framework for creating web applications
 * in Node JS.
 */
const app = express();

// Handlebars Middleware
/*
 * 1. Handlebars is a front-end web templating engine that helps to create dynamic web pages using variables
 * from Node JS.
 *
 * 2. Node JS will look at Handlebars files under the views directory
 *
 * 3. 'defaultLayout' specifies the main.handlebars file under views/layouts as the main template
 *
 * */
app.engine(
  "handlebars",
  engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "main", // Specify default template views/layout/main.handlebar
  })
);
app.set("view engine", "handlebars");

// Express middleware to parse HTTP body in order to read HTTP data
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// Creates static folder for publicly accessible HTML, CSS and Javascript files
app.use(express.static(path.join(__dirname, "public")));

// Enables session to be stored using browser's Cookie ID
app.use(cookieParser());

// To store session information. By default it is stored as a cookie on browser
app.use(
  session({
    key: "CAM e-Reference",
    secret: "tojdiv",
    resave: false,
    saveUninitialized: false,
  })
);

// Messaging libraries
// const flash = require("connect-flash");
// app.use(flash());
// const flashMessenger = require("flash-messenger");
// app.use(flashMessenger.middleware);

// Bring in database connection
const DBConnection = require("./config/DBConnection");
// Connects to MySQL database
DBConnection.setUpDB(false); // To set up database with new tables (true)

// Import data from importData.js
const importData = require("./importData");
// Call the importData function
importData(); // This will execute the importData.js script when the application starts

// // Passport Config
// const passport = require("passport");
// const passportConfig = require("./config/passportConfig");
// passportConfig.localStrategy(passport);

// // Initilize Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Place to define global variables
// app.use(function (req, res, next) {
//   res.locals.messages = req.flash("message");
//   res.locals.errors = req.flash("error");
//   res.locals.user = req.user || null;
//   next();
// });

// mainRoute is declared to point to routes/main.js
const mainRoute = require("./routes/main");
const drugRoute = require("./routes/drug");

// Any URL with the pattern ‘/*’ is directed to routes/main.js
app.use("/", mainRoute);
app.use("/drug", drugRoute);

/*
 * Creates a port for express server since we don't want our app to clash with well known
 * ports such as 80 or 8080.
 * */
const port = process.env.PORT || 80; // Default to 80 if process.env.PORT is not set

// Starts the server and listen to port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
