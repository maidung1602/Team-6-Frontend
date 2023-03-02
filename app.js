const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = config.port || 7777;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './src/views');

const learningRouter = require('./src/routes/learning');
app.use('/learning', learningRouter);

const homeRouter = require('./src/routes/index');
app.use('/', homeRouter);

const questionRouter = require('./src/routes/question-route');
app.use('/api', questionRouter);


app.listen(port, () =>
{
    console.log(`Server running on port ${port}`);
});
