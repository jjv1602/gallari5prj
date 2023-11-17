const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
const connectDB=require("./config/db.js");
const userRoutes=require("./routes/userRoutes");
dotenv.config({ path: path.resolve(__dirname, '../.env') });;

connectDB();
const app=express();
app.use(express.json());
app.use('/api/users',userRoutes);   //userRoutes is imported above 


// ---------production ------------------
if (process.env.NODE_ENV === 'production') {
  const __dirname1 = path.resolve();

  const staticPath = path.join(__dirname1, 'frontend', 'dist');
  console.log('Static Path:', staticPath);

  app.use(express.static(staticPath));

  app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname1, 'frontend', 'dist', 'index.html');
    console.log('Index Path:', indexPath);
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running.');
  });
}
//   ------------------------
const { errorHandler, notFound } = require('./middlewares/errorMiddlewares');
app.use(notFound)
app.use(errorHandler)
const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT} `));
