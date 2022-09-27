const express = require('express');
const cors = require('cors');
const clear = require('clear');
const chalk = require('chalk');
const port = 4000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));
app.listen(port, () => {
    clear();
    console.log(chalk.yellow(`API running on http://localhost:${port}`));
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes')(app);