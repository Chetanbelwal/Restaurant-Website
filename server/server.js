import app from './app.js'
import connectToDb from './utils/db.js'
import {errorMiddleware} from './error/error.js'
import reservationRoute from './routes/reservationRoute.js'




// Define port and start server
const PORT = process.env.PORT || 5000;



app.use('/api/reservation', reservationRoute)
app.use(errorMiddleware)

connectToDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  });