const app = require('./app');

const companyRouter = require('./Routes/Company.Routes');

const PORT = 3001;

app.use('/companies', companyRouter );

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});