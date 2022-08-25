const MovieDB = require('node-themoviedb');
// ES6 Style
// import MovieDB from 'node-themoviedb';
const mdb = new MovieDB('24d8d681a05bd7818f3622afee784c45', options);

(async () => {
  try {
    const args = {
      pathParameters: {
        movie_id: 384018,
      },
    };
    const movie = await mdb.movie.getDetails(args);
    console.log(movie);
    /*
      {
        data: Object. Parsed json data of response
        headers: Object. Headers of response
      }
    */
  } catch (error) {
    console.error(error);
  }
})();