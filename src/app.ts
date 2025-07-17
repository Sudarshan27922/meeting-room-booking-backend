import express, { Application } from 'express';
import roomRoutes from './routes/room.routes';
import authRoutes from './routes/auth.routes'
import cookieParser from 'cookie-parser';
import bookingRoutes from './routes/booking.routes'
import neonRoomRoutes from './routes/neonRoom.routes';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/rooms', roomRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/bookings', bookingRoutes);

//for neon db
app.use('/api/neon-rooms', neonRoomRoutes);

app.get('/', (req, res) => {
  console.log("GET / route hit");
  res.send('API is running');
});

export default app;


