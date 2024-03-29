// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require("../data/friends");
var path = require('path');

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        function compareScores(currentUserScore, currentFriendScore) {
            var totalDifference = 0;
            for (var i = 0; i < currentUserScore.length; i++) {
                totalDifference += Math.abs(parseInt(currentUserScore[i]) - parseInt(currentFriendScore[i]));
            }
            return totalDifference;
        }

        var bestMatch = 40;
        for (var i = 0; i < friends.length; i++) {
            totalDifference = compareScores(req.body.scores, friends[i].scores)
            if (totalDifference < bestMatch) {
                bestMatch = totalDifference;
                indexMatch = i;
            }
        }
        
       var userMatch = {
            name: friends[indexMatch].name,
            photo: friends[indexMatch].photo
        }

        friends.push(req.body);
        res.json(userMatch);
        console.log(userMatch);
    });

}