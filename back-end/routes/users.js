let db = require("../db/queries");
var express = require("express");
var router = express.Router();
const { loginRequired } = require("../auth/helpers");

router.get("/", loginRequired, db.getAllUsers);
router.post("/new", db.registerUser);
router.get("/hobbies", loginRequired, db.getUserHobbies);
router.patch("/hobbies", loginRequired, db.updateUserHobbies);
router.post("/login", db.loginUser);
router.get("/leaderboard", db.getLeaderBoard);
// router.get("/logout", loginRequired, db.logoutuser);

module.exports = router;

