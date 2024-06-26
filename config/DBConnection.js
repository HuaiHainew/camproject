const mySQLDB = require("./DBConfig");

// If drop is true, all existing tables are dropped and recreated
const setUpDB = (drop) => {
  mySQLDB
    .authenticate()
    .then(() => {
      console.log("Database connected");
      /*  
            Defines the relationship where a user has many videos.  
            The primary key from user will be a foreign key in video.  
            */

      mySQLDB.sync({
        force: drop,
      });
    })
    .catch((err) => console.log(err));
};
module.exports = { setUpDB };
