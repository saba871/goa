const express = require("express");
const {
  getMovies,
  getMovie,
  deleteMovie,
  postMovie,
} = require("../controllers/movies.controller");
const movieRouter = express.Router();

// get All movies
movieRouter.get("/", getMovies);

// get movie by ID
movieRouter.get("/:id", getMovie);

// delete movie by id
movieRouter.delete("/:id", deleteMovie);

// post movie
movieRouter.post("/", postMovie);

module.exports = {
  movieRouter,
};
