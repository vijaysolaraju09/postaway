import { addUser, confirmLogin, getAllUsers } from "../model/user.model.js";
import jwt from "jsonwebtoken";
export default class UserController {
  handleRegistration = (req, res) => {
    const { name, email, password } = req.body;
    try {
      const registration = addUser(name, email, password);
      if (registration.success == false) {
        res.status(401).json(registration);
      } else {
        res.status(201).json(registration);
      }
    } catch (err) {
      res
        .status(500)
        .send("Server error user registration failed @handleRegistration");
    }
  };

  handleLogin = (req, res) => {
    const { email, password } = req.body;
    try {
      const user = confirmLogin(email, password);
      if (user) {
        const token = jwt.sign(
          { userId: user.id, userEmail: user.email },
          "dontshare",
          { expiresIn: "1h" }
        );
        res
          .status(200)
          .cookie("token", token, { maxAge: 90000, httpOnly: false })
          .json({ success: true, msg: "login successful", user: user });
      } else {
        res.status(400).json({ success: false, msg: "invalid credentials" });
      }
    } catch (err) {
      res.status(500).send("Server Error login failed @handleLogin");
    }
  };

  handleGetAllUsers = (req, res) => {
    try {
      const allUsers = getAllUsers();
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).send("Server to get all users @handleGetAllUsers");
    }
  };
}
