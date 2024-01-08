<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Potencias Fraccionales de Dos</title>
  <style>
    table {
      border-collapse: collapse;
      width: 50%;
      margin: 20px;
    }

    th, td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
  </style>
</head>
<body>

<h2>Potencias Fraccionales de Dos</h2>

<table>
  <thead>
    <tr>
      <th>Potencia</th>
      <th>Fracción</th>
      <th>Suma</th>
    </tr>
  </thead>
  <tbody id="tablaResultado"></tbody>
</table>

<script>
  function sumaFracciones(n) {
    let potencia = 1;
    let fraccion = 1.0;
    let suma = 0.0;

    let tablaResultado = document.getElementById("tablaResultado");

    for (let i = 0; i < n; i++) {
      let fila = tablaResultado.insertRow();
      let celdaPotencia = fila.insertCell(0);
      let celdaFraccion = fila.insertCell(1);
      let celdaSuma = fila.insertCell(2);

      celdaPotencia.textContent = potencia;
      celdaFraccion.textContent = fraccion;
      celdaSuma.textContent = suma;

      suma += fraccion;
      potencia *= 2;
      fraccion /= 2;
    }
  }

  // Define el número de filas que deseas mostrar
  const numeroFilas = 7;

  // Llama a la función con el número de filas deseado
  sumaFracciones(numeroFilas);
</script>

</body>
</html>
