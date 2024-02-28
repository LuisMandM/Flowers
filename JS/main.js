onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function () {
        var popupContainer = document.getElementById('popupContainer');

        // Detecta el final de las animaciones
        document.querySelector('.flowers').addEventListener('animationend', function () {
                setTimeout(function() {
                        popupContainer.style.display = 'block';
                }, 5000);

        });
});

// Función para cerrar la ventana emergente
function closePopup() {
        var popupContainer = document.getElementById('popupContainer');
        popupContainer.style.display = 'none';
}
