const app = require("./app");
const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");

mongoose
  .connect(MONGODB_URI)

  .then(() => {
    console.log("connected to database.........");

    // server
    app.listen(PORT, () => {
      console.log(`server is running @ http://127.0.0.1:3000`);
    });
  })
  .catch((error) => {
    console.log("error connecting to the database", error);
  });
