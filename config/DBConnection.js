const db = require("./DBConfig");

const setUpDB = (drop) => {
    db.authenticate()
        .then(() => {
            console.log("Database connected");
            db.sync({ force: drop }).then(() => {
                console.log("Database synchronized");
            });
        })
        .catch((err) => console.error("Error connecting to the database:", err));
};

module.exports = { setUpDB };
