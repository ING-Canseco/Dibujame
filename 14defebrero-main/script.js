$(document).ready(function () {
  // Obtener el audio
  var audio = $("#music")[0];

  // Función para alternar la animación y reproducir la música
  function toggleOpen() {
    $(".container").toggleClass("open");
    
    // Si la animación inicia, reproducir la música
    if ($(".container").hasClass("open")) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // Reinicia la música si se cierra
    }
  }

  // Evento de clic en "Tócame" y el botón de cerrar
  $(".title, .close").on("click", toggleOpen);
});
