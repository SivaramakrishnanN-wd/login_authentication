const express = require("express");
const { PORT, CLIENT_URL } = require("./constants");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

require("./middlewares/passport_middleware");

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
const authRoutes = require("./routes/auth");

app.use("/api", authRoutes);

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

appStart();
