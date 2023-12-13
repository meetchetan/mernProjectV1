const express = require("express");
const app = express();
const router = require("./router/auth-router");

// middle-ware
// Added express middleware that parses incoming request bodies with JSON payload.
app.use(express.json());

// Mount the Router
app.use("/api/auth", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
