const express = require('express');
const app = express();
const port = 8080;

app.get('/suma', (req, res) => {
    const suma = 5 + 6;
    res.send("El Resultado de la suma es: " + suma);
});

app.get('/resta', (req, res) => {
    const resta = 5 - 6;
    res.send("El Resultado de la resta es: " + resta);
});

app.get('/multiplicacion', (req, res) => {
    const multiplicacion = 5 * 6;
    res.send("El Resultado de la multiplicacion es: " + multiplicacion);
});

app.get('/division', (req, res) => {
    const division = 5 / 6;
    res.send("El Resultado de la division es: " + division);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});