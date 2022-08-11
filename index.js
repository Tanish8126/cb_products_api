const express = require("express");
const app = express();
const mongoose = require("mongoose");
const express = require("./config/app.config");
const errors = require("./middleware/errors.js");
const swagerUi = require("swagger-ui-express"), swaggerDocument = require("./swagger.json");

mongoose.Promise = global.Promise;
mongoose
 .connect(MONGO_DB_CONFIG.DB, {
    useNewUrlPraser: true,
    useUnifiedTopology: true,
 })
 .then(
        () => {
            console.log("Database Connected");
        },
        (error) => {
            console.log("Database can't br connected:" + error);
        }
 );

 app.use(express.json());
 app.use("/uploads", express.static("uploads"));
 app.use("/api", require("./routes/app.routes"));
 app.use(errors.errorHandler);
 app.use("/api-docs", swagerUi.serve, swagerUi.setup(swaggerDocument));


 app.listen(process.env.port || 4000, function () {
    console.log("Ready to Go!")
 });