const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const Actors = require( './models/actor-model');
const Movies = require( './models/movie-model' );
const { DATABASE_URL, PORT } = require( './config' );
const errorHandler = require('./middleware/errorHandler');
const app = express();

/* 
    Your code goes here 
*/

app.patch('/api/add-movie-actor/:movie_ID',jsonParser,errorHandler,(req,res)=>{
    let id = req.body.id;
    let movieId = req.params.movie_ID;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    
    Movies
    .get
    

})

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});