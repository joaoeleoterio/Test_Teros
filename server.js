const app = require('./app');

const companyRouter = require('./Routes/Company.Routes');


const PORT = process.env.PORT || 3001;

app.use('/company', companyRouter );

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});