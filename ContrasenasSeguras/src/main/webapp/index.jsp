<%--
  Created by IntelliJ IDEA.
  User: Florin Giany Virlan
  Date: 29/05/2024

--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="script/contrasenasSeguras.js" defer></script>
    <title>Crear Contraseña Segura 😉</title>
</head>
<body>
<div class="container">
    <h1>Crear Contraseña Segura</h1>
    <form id="passwordForm">
        <div class="col-12">
            <label for="ciudadFavorita">Ciudad favorita:</label>
            <input type="text" id="ciudadFavorita" name="username" required>
        </div>
        <div class="col-12">
            <label for="frutaFavorita">Fruta favorita:</label>
            <input type="text" id="frutaFavorita" name="domain" required>
        </div>
        <div class="col-12">
            <label for="specialChar">Carácter especial:</label>
            <input type="text" id="specialChar" name="specialChar" maxlength="1" required>
        </div>
        <div class="col-12">
            <button type="submit">Crear Contraseña</button>
        </div>
    </form>
    <div id="passwordResult" class="col-12 hidden">
        <p>Contraseña Generada:</p>
        <p id="generatedPassword"></p>
        <button id="copyButton">Copiar Contraseña</button>
        <button id="deleteButton">Borrar Formulario</button>
    </div>
    <div class="info-link">
        <a href="https://password.kaspersky.com/" target="_blank">Check your password 😉</a>
    </div>
</div>
</body>
</html>
