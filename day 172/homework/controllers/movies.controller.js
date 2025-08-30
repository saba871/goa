const movies = [
  {
    id: 1,
    name: "The Godfather",
    year: 1972,
    rating: 9.2,
  },
  {
    id: 2,
    name: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    id: 3,
    name: "Fight Club",
    year: 1999,
    rating: 8.8,
  },
];

const getMovies = (req, res) => {
  res.json(movies);
};

const getMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const findMovie = movies.find((movie) => movie.id === id);

  if (!findMovie) {
    return res.status(404).json({
      status: "Fail",
      message: "Invalid Movie ID",
    });
  }
  return res.json(findMovie);
};

const deleteMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    return res.status(404).json({
      status: "Fail",
      message: "Movie Not Found",
    });
  }
  movies.splice(index, 1);
  return res.status(201).send();
};

const postMovie = (req, res) => {
  const { name, year, rating } = req.body;

  if (!name || !year || !rating) {
    return res.status(404).json({
      stauts: "Fail",
      message: "Fill All Fileds: name, year, rating",
    });
  }
  const movie = {
    id: movies[movies.length - 1].id + 1,
    name,
    year,
    rating,
  };
  movies.push(movie);
  return res.status(201).json(movie);
};

module.exports = {
  getMovies,
  getMovie,
  deleteMovie,
  postMovie,
};
