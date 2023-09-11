const Actor = require('./Actor');
const Director = require('./Director');
const Genre = require('./Genre');
const Movie = require('./Movie');

Actor.belongsToMany(Movie,{through:"movieActor"});
Movie.belongsToMany(Actor,{through:"movieActor"});

Director.belongsToMany(Movie,{through:"movieDirector"});
Movie.belongsToMany(Director,{through:"movieDirector"});

Genre.belongsToMany(Movie,{through:"movieGenre"});
Movie.belongsToMany(Genre,{through:"movieGenre"});
