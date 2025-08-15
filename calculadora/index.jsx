const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>Calculadora Express</h1>
    <form action="/calcular-todo" method="post">
      <h3>Suma</h3>
      <input type="number" name="sumaA" placeholder="Primer número (suma)" required />
      <span> + </span>
      <input type="number" name="sumaB" placeholder="Segundo número (suma)" required />

      <h3>Resta</h3>
      <input type="number" name="restaA" placeholder="Primer número (resta)" required />
      <span> - </span>
      <input type="number" name="restaB" placeholder="Segundo número (resta)" required />

      <h3>Multiplicación</h3>
      <input type="number" name="multiA" placeholder="Primer número (multiplicación)" required />
      <span> * </span>
      <input type="number" name="multiB" placeholder="Segundo número (multiplicación)" required />

      <h3>División</h3>
      <input type="number" name="divA" placeholder="Primer número (División)" required />
      <span> / </span>
      <input type="number" name="divB" placeholder="Segundo número (División" required />

      <br /><br />
      <button type="submit">Calcular</button>
    </form>
  `);
});

app.post('/calcular-todo', (req, res) => {
  const {
    sumaA, sumaB,
    restaA, restaB,
    multiA, multiB,
    divA, divB
  } = req.body;

  const suma = parseFloat(sumaA) + parseFloat(sumaB);
  const resta = parseFloat(restaA) - parseFloat(restaB);
  const multiplicacion = parseFloat(multiA) * parseFloat(multiB);
  const division = parseFloat(divB) !== 0
    ? (parseFloat(divA) / parseFloat(divB)).toFixed(2)
    : 'Error: División por cero';

  res.send(`
    <h1>Resultados</h1>

    <p><strong>Suma:</strong> ${sumaA} + ${sumaB} = ${suma}</p>
    <p><strong>Resta:</strong> ${restaA} - ${restaB} = ${resta}</p>
    <p><strong>Multiplicación:</strong> ${multiA} * ${multiB} = ${multiplicacion}</p>
    <p><strong>División:</strong> ${divA} / ${divB} = ${division}</p>

    <br />
    <a href="/">Volver al Inicio</a>
  `);
});
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});