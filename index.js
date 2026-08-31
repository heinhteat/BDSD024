const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const courseRouter = require('./course');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount rounting at /course
app.use('/course', courseRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});