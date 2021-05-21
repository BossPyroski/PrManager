const express = require('express');
const app = express();
const cors = require('cors');
require('./server/config/mongoose.config');
const port = 8000;

app.use(cors(), express.json(), express.urlencoded({ extended: true }))

require('./server/routes/product.routes')(app);  
app.listen(port, () => console.log(`Listening on port: ${port}`) );