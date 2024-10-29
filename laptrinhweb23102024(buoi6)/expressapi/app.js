const express = require('express');
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.listen(port, () => {
    console.log('Server is running at http://localhost:${port}');
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ]);
});