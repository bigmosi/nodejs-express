const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();

const port = 8000;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello from my app');
}); 

app.listen(port, () => {
    debug(`Server is running on port ${chalk.green(port)}`);
})

