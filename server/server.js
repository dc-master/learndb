const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Start Project');

});

app.listen(3000, () => {
    console.log("Server is running...");
});