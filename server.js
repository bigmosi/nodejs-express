const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send('Hello from my app');
}); 

app.listen(PORT, () => {
    debug(`Server is running on port ${chalk.green(PORT)}`);
})

