const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const User = require("./models/User");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
    const user = new User({
        handle: "surf_dude",
        firstName: "Johnny",
        lastName: "Tsunami",
        email: "ilovesurfing@surfing.com",
        password: "surf123"
    })
    user.save()
    res.send("Surfs up!")
});

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
