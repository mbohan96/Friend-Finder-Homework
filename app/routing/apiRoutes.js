
var path = require('path');
var friends = require("../data/friends.js");



module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


 

  app.post("/api/friends", function(req, res) {
 
   var Input = req.body;
      var Response = Input.scores;
      var matchedFriend  = {
        name: "",
        photo: "",
        difference: 500
      };

      for (var i = 0; i < friends.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < Response.length; j++) {
          totalDifference += Math.abs(friends[i].scores[j] - Response[j]);
          
          if (totalDifference <= matchedFriend.difference){
              matchedFriend.name = friends[i].name;
              matchedFriend.photo = friends[i].photo;
              matchedFriend.difference = totalDifference;
          }
        }
      }

      friends.push(Input);

      res.json(matchedFriend);

    });
  };