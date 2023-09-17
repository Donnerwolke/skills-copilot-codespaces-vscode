//Create web server
var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require("../config/passport");

//Get all comments
router.get("/", function(req, res) {
  db.Comment.findAll({}).then(function(comments) {
    res.json(comments);
  });
});

//Get comment by id
router.get("/:id", function(req, res) {
  db.Comment.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(comment) {
    res.json(comment);
  });
});

//Create new comment
router.post("/", function(req, res) {
  db.Comment.create(req.body).then(function(comment) {
    res.json(comment);
  });
});

//Delete comment by id
router.delete("/:id", function(req, res) {
  db.Comment.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(comment) {
    res.json(comment);
  });
});

//Update comment by id
router.put("/:id", function(req, res) {
  db.Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function(comment) {
    res.json(comment);
  });
});

module.exports = router;