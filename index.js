const express = require('express');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.get('/bye', (req, res) => {
    res.send('Goodbye, world!');
});

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = {
    app,
    server
}// Export the app for testing

