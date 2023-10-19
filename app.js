require("dotenv").config();

const express = require("express");
const app = require("express")();

const paymentRoute = require("./routes/paymentRoute");

app.use("/", paymentRoute);
app.listen(3000, function () {
  console.log("Server is running");
});
