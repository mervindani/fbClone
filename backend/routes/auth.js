const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//REGISTER USER
router.post("/register", async (req, res) => {
  try {
    //generating hashed password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    //creating new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //saving new user
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
