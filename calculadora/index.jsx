const express = require('express');
const app = express();
const port = 3000;

app.get('/suma', (req, res) => {
    const suma = 23 + 96;
    res.send("El Resultado de la suma es: " + suma);
});

app.get('/resta', (req, res) => {
    const resta = 234 - 567;
    res.send("El Resultado de la resta es: " + resta);
});

app.get('/multiplicacion', (req, res) => {
    const multiplicacion = 45667 * 6;
    res.send("El Resultado de la multiplicacion es: " + multiplicacion);
});

app.get('/division', (req, res) => {
    const division = 1996 / 6;
    res.send("El Resultado de la division es: " + division);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});