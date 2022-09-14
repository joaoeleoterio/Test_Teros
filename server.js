const app = require('./app');
const cors = require('cors');

const companyRouter = require('./Routes/Company.Routes');

const PORT = 3001;

app.use(cors());

app.use('/companies', companyRouter );

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});