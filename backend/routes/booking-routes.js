import express from 'express';
import {
  deleteBooking,
  getBookingById,
  newBooking,
} from '../controllers/booking-controller';

const bookingsRouter = express.Router();

bookingsRouter.get('/:id', getBookingById);
bookingsRouter.delete('/:id', deleteBooking);
bookingsRouter.post('/', newBooking);

export default bookingsRouter;
