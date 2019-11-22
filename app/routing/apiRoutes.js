// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require("../data/friends");
var path = require('path');

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name:"",
            photo:"",
            friendDifference: Infinity
        };
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 
        //for loop var to store count friend object- 
            //--2nd- 1 friends particular score
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore))
            if(totalDifference <= bestMatch.friendDifference) {
                //
                
            } 
            // friends.push(userData)
        res.json(userData)

        //end with res.jsonbestMatch
    });

}