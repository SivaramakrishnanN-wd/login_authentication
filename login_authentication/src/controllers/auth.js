const db = require("../db/index");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants/index");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query(
      "select id, email from login_authentication"
    );

    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.register = async (req, res) => {
  const { name, age, phone, position, username, gender, email, password } =
    req.body;
  try {
    const hashedPassword = await hash(password, 10);
    await db.query(
      "insert into login_authentication(name,age,phone,position,username,gender,email,password) values ($1 , $2 , $3 , $4 , $5 , $6 , $7 , $8)",
      [name, age, phone, position, username, gender, email, hashedPassword]
    );
    return res.status(201).json({
      success: true,
      message: "the registration was successful",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
exports.login = async (req, res) => {
  let user = req.user;
  payload = {
    id: user.id,
    email: user.email,
  };
  try {
    const token = await sign(payload, SECRET);
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged Succesfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logout Succesfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
