const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const cors = require("cors");


//Variables
app.set("PORT", process.env.PORT || 3001);

//views
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  handlebars({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: "hbs"
  })
);

app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());



//routes
app.use("/", require("./routes/routes"));

//Static files
app.use("/public", express.static(path.join(__dirname, "./public")));

//Server
app.listen(app.get("PORT"), () => {
  console.log(`server on port ${app.get("PORT")}`);
});