"# Refresh-app-BE"

require("dotenv").config;
const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});

---

in package.json
in scripts:
"start": "node src/server.js" -- we can start node typing "npm run startt" or "npm start"

---

app.get("/health", (req, res) => {
res.status(200).json({ message: "API healthy" });
});

thunderclient get
http://localhost:5001/health

---

git add .
etc

************\************* username packagest **************\*\*\***************

npm init -y

npm install dotenv express sequelize mysql2 bcrypt cors

---

connection.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

Sequelize.authenticate();

console.log("db conection is workinr");

module.exports = sequelize;

---

model.js:

const { DataTypes } = require("sequelize");
const sequelize = require("../bd/connection");

const User = sequelize.define("User", {
username: {
type: DataTypes > STRING,
unique: true,
allowNull: false,
},
email: {
type: DataTypes > STRING,
unique: true,
},
password: {
type: DataTypes > STRING,
unique: true,
},
});

module.exports.user;

---

in server.js:

require("dotenv").config();
const express = require("express");

const User = require("./users/model"); < --------------- THIS

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
const SyncTables = () => { < --------------- THIS WHOLE
User.sync();
};

app.listen(port, () => {
SyncTables(); < --------------- THIS
console.log(`Server is listening on ${port}`);
});

---

Route create

const {Router} = require("express")

const userRouter = Router()

const {signupuUser} = require("./controlers")

userRouter.post("/users/signup", signupuUser)

module.exports = userRouter

---

controller create:

const User = require("./model");

const signupuUser = async (req, res) => {
try {
const user = await User.create({
username: req.body.username,
});
} catch (error) {
res.status(501).json({ message: error.message, error: eroor });
}
};

module.exports = {
signupuUser: signupuUser,
};

---

in server.js

require("dotenv").config();
const express = require("express");

const User = require("./users/model");
const userRouter = require("./users/routes"); < --------------- THIS

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());

app.use(userRouter); < --------------- THIS

const SyncTables = () => {
User.sync();
};

app.listen(port, () => {
SyncTables();
console.log(`Server is listening on ${port}`);
});

---

create requeste
