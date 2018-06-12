import mongoose from 'mongoose';


import secrets from './config/secrets/secrets';
import app from './server';


const PORT = process.env.PORT || 3001;

mongoose.connect(secrets.mongoURI)
  .then(() => console.log(`Database connected!`))
  .catch(console.log);


app.listen(PORT, err => {
  if (err) return console.log(err);
  console.log(`App listening on port ${PORT}`);
});