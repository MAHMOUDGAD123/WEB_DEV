import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/_index.mjs";
import session from "express-session";
import { SESSION_LIFE } from "./routes/constants.mjs";

const PORT = process.env.PORT || 7000;
const app = express();

// used to parse the body of the requests as json
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "MG_SESSION",
    saveUninitialized: false,
    resave: false,
    name: "authorized",
    cookie: {
      maxAge: SESSION_LIFE,
    },
  })
);
app.use(routes);
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/", (req, res) => {
  const msg = "Welcome to our Express app 😊";
  res.render("message", { msg });
});

app.get("*", (_req, res) => {
  const msg = "404 | Not Found";
  res.render("message", { msg });
});
