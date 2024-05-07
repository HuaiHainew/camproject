const express = require("express");
const { engine } = require("express-handlebars");
const Handlebars = require("handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");

const app = express();

app.engine("handlebars", engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(session({
    key: "CAM e-Reference",
    secret: "tojdiv",
    resave: false,
    saveUninitialized: false
}));

const DBConnection = require("./config/DBConnection");
DBConnection.setUpDB(false);

const importData = require("./importData");
importData();

const mainRoute = require("./routes/main");
const drugRoute = require("./routes/drug");
app.use("/", mainRoute);
app.use("/drug", drugRoute);

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
