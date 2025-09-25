const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Sam:lqzIuaNPCjupVPNL@cluster0.75me0c1.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUniTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `Server is running succesfuly on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
