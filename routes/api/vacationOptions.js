var db = require("../../models");
var express = require('express');
var router  = express.Router();

  // GET route for getting all vacationoptions
  router.get("/", function(req, res) {
    db.VacationOptions.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });

  // Get route for returning specific vacationOption info
  router.get("/:id", function(req, res) {
    db.vacationOptions.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });


  // POST route for creating new vacation option
  router.post("/", function(req, res) {
    console.log(req.body);
<<<<<<< HEAD
    db.VacationOptions.create({
      city1: req.body.city1,
      city2: req.body.city2,
      city3: req.body.city3,
      city4: req.body.city4,
      city5: req.body.city5,
      GroupId: req.body.GroupId
    })
=======
    db.VacationOptions.create(req.body)
>>>>>>> 8f9ba3523591880cf801b388d4ec6183ae735080
      .then(function(result) {
        console.log("Just posted VacationOptions with " + result);
        res.json(result);
      });
  });

  // DELETE route for deleting vacationOptions
  router.delete("/:id", function(req, res) {
    db.VacationOptions.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });


module.exports = router;