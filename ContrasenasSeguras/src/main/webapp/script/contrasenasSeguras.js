// Espera a que todo el contenido del DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {

    // Obtiene una referencia al formulario de generación de contraseñas por su ID
    let form = document.getElementById('passwordForm');

    // Obtiene una referencia al contenedor donde se mostrará la contraseña generada por su ID
    let passwordResult = document.getElementById('passwordResult');

    // Obtiene una referencia al elemento que contendrá la contraseña generada por su ID
    let generatedPasswordElement = document.getElementById('generatedPassword');

    // Agrega un event listener al formulario para el evento 'submit'
    form.addEventListener('submit', (event) => {
        // Previene el envío del formulario y la recarga de la página
        event.preventDefault();

        // Obtiene el valor ingresado por el usuario en el campo de nombre de ciudad favorita
        let ciudadFavorita = document.getElementById('ciudadFavorita').value;

        // Obtiene el valor ingresado por el usuario en el campo de fruta favorita
        let frutaFavorita = document.getElementById('frutaFavorita').value;

        // Obtiene el valor ingresado por el usuario en el campo de carácter especial
        let caracterEspecial = document.getElementById('specialChar').value;

        // Genera una contraseña segura utilizando los valores ingresados
        let generatedPassword = generateSecurePassword(ciudadFavorita, frutaFavorita, caracterEspecial);

        // Establece la contraseña generada como el contenido de texto del elemento correspondiente
        generatedPasswordElement.textContent = generatedPassword;

        // Muestra el contenedor del resultado de la contraseña quitando la clase 'hidden'
        passwordResult.classList.remove('hidden');
    });

    // Función para generar una contraseña segura
    function generateSecurePassword(ciudadFavorita, frutaFavorita, caracterEspecial) {
        // Combina el nombre de ciudad favorita, el fruta favorita y el carácter especial para crear una contraseña base
        let basePassword = ciudadFavorita + frutaFavorita + caracterEspecial;

        // Devuelve la contraseña base mezclada y concatenada con una cadena aleatoria de 10 caracteres
        return shuffleString(basePassword) + generateRandomString(10);
    }

    // Obtiene una referencia al botón de copiar por su ID
    let copyButton = document.getElementById('copyButton');

    // Agrega un event listener al botón de copiar para el evento 'click'
    copyButton.addEventListener('click', () => {
        // Obtiene la contraseña generada del elemento correspondiente
        let password = generatedPasswordElement.textContent;

        // Copia la contraseña al portapapeles utilizando la API de portapapeles
        navigator.clipboard.writeText(password)
            .then(() => {
                // Muestra una alerta confirmando que la contraseña fue copiada
                alert('Contraseña copiada al portapapeles');
            })
            .catch(err => {
                // Muestra una alerta indicando que hubo un error al copiar la contraseña
                alert('Error al copiar la contraseña: ' + err);
            });
    });
    // Agrega un event listener al botón de borrar para el evento 'click'
    deleteButton.addEventListener('click', () => {
        // Resetea los campos del formulario
        form.reset();

        // Oculta el contenedor del resultado de la contraseña añadiendo la clase 'hidden'
        passwordResult.classList.add('hidden');
    });

    // Función para mezclar los caracteres de una cadena de forma aleatoria
    function shuffleString(string) {
        // Convierte la cadena en un array de caracteres
        let array = string.split('');

        // Recorre el array de atrás hacia adelante para mezclar los caracteres
        for (let i = array.length - 1; i > 0; i--) {
            // Genera un índice aleatorio
            let j = Math.floor(Math.random() * (i + 1));

            // Intercambia los caracteres en las posiciones i y j
            [array[i], array[j]] = [array[j], array[i]];
        }

        // Convierte el array mezclado de nuevo en una cadena y la devuelve
        return array.join('');
    }

    // Función para generar una cadena aleatoria de una longitud especificada
    function generateRandomString(length) {
        // Define los caracteres posibles para la cadena aleatoria
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

        // Inicializa la cadena de resultado
        let result = '';

        // Genera una cadena de la longitud especificada
        for (let i = 0; i < length; i++) {
            // Genera un índice aleatorio para seleccionar un carácter del conjunto posible
            let randomIndex = Math.floor(Math.random() * characters.length);

            // Añade el carácter seleccionado a la cadena de resultado
            result += characters[randomIndex];
        }

        // Devuelve la cadena aleatoria generada
        return result;
    }
});
