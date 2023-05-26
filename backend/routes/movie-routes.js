import express from 'express';
import {
  addMovie,
  getMovieById,
  getallMovies,
} from '../controllers/movie-controller';

const movieRouter = express.Router();
movieRouter.get('/', getallMovies);
movieRouter.get('/:id', getMovieById);
movieRouter.post('/', addMovie);

export default movieRouter;
