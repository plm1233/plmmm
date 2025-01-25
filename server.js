// Importă Express și Body-Parser
const express = require('express');
const bodyParser = require('body-parser');

// Creează aplicația Express
const app = express();
const port = 3000;

// Middleware pentru procesarea datelor trimise prin formular
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta pentru a primi datele din formular
app.post('/submit', (req, res) => {
    const { username, password } = req.body;

    // Afișează username-ul și parola primite în consola serverului
    console.log(`Username: ${username}, Password: ${password}`);

    // Trimite un răspuns către client
    res.send('Datele au fost trimise și procesate cu succes.');
});

// Pornește serverul
app.listen(port, () => {
    console.log(`Serverul rulează pe http://localhost:${port}`);
});
