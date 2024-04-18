const express = require('express'), cors = require('cors'), bodyParser = require('body-parser'),
    routes = require('./routes'), app = express();

app.use(cors({origin: 'http://localhost:5500'}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



app.listen(3000, () => {
  console.log('Server is running on port 3000');
} );