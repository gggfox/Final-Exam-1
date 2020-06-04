let Actors = require('./../models/actor-model');
let Movies = require('./../models/movie-model');

function errorHandler(error, req, res) {
    /* 

        Your code goes here

    */
   let id = req.body.id;
   let movieId = req.params.movie_ID;
   let firstName = req.body.firstName;
   let lastName = req.body.lastName;
   if( !id ){
       res.statusMessage = "id is missing in the body of the request";
       return res.statusCode( 406 ).end();
   }

    if (id !== movieId){
        res.statusMessage = "id and movie_ID do not match";
        return res.statusCode(409).end();
    }

    if( ! firstName || !lastName || !movieId){
        res.statusMessage = "you need to send both firstName and lastName of the actor to add to the movie list";
        return res.statusCode(403).end();
    }

    Actors
    .getActorByName( firstName, lastName )
    .then( actor => {
        if(actor){
            Movies
            .getMovieByID(movieId)
            .then( result =>{
                return result;
            })
            .catch( err => {
                res.statusMessage = "The actor or movie does not exist";
                return res.statusCode(404).end()
            })
        }else{
            res.statusMessage = "The actor or movie does not exist";
            return res.statusCode(404).end()  
        }
    })
    .catch( err => {
        res.statusMessage = "The actor or movie does not exist";
        return res.statusCode(404).end()
    });


   return next();
};

module.exports = errorHandler;