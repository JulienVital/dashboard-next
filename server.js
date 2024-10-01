const express = require('express');
const app = express();
const port = 6000;

// Middleware pour parser le corps de la requête JSON
app.use(express.json());

app.post('/', (req, res) => { // Change to POST
    const message = req.body.message; // Récupérer le message
    console.log('Message reçu :', message);
    res.send('Hello World! test');
});

app.listen(port, () => {
    console.log(`Example app listening on port -> ${port}`);
});
