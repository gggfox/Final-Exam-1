const mongoose = require( 'mongoose' );

const moviesSchema = mongoose.Schema({
    movie_ID : {
        type : Number,
        unique : true,
        required : true
    },
    movie_title : {
        type : String,
        required : true
    },
    year :  {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    actors : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'actors',
        required : true
    }]
});

const moviesCollection = mongoose.model( 'movies', moviesSchema );

const Movies = {
    createMovie : function( newMovie ){
        return moviesCollection
                .create( newMovie )
                .then( createdMovie => {
                    return createdMovie;
                })
                .catch( err => {
                    throw new Error( err );
                });
    },
    getMovieByID : function( movie_id ){
        return moviesCollection
            .findOne({movie_ID:movie_id})
            .then( movie => {
                return movie;
            })
            .catch( err => {
                throw new Error( err );
            });
    },
    addActorToMovieList : function( Actor ){
        return moviesCollection
            .updateOne(
                {$set:}
            )
    },
    findActorInMovieList : function( movieId, Actor ){
        return moviesCollection
            .findOne({movie_ID:movie_id,actors:Actor})
    }
    /*
        Your code goes here
    */
}

module.exports = {
    Movies
};

