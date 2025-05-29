function vald_form() {
    const valorApellido = document.getElementById('apellido').value;
    const valorNombre = document.getElementById('nombre').value;
    const valorDNI = document.getElementById('dni').value;
    const valorFecha = new Date(document.getElementById('fecha').value);
    const valorCorreo = document.getElementById('email').value;
  
    const patronLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const patronDNI = /^\d{8}$/;
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let listaErrores = [];
  
    if (!patronLetras.test(valorApellido)) listaErrores.push("Apellido inválido.");
    if (!patronLetras.test(valorNombre)) listaErrores.push("Nombre inválido.");
    if (!patronDNI.test(valorDNI)) listaErrores.push("DNI inválido (8 números requeridos).");
    if (valorFecha.getFullYear() <= 2006) listaErrores.push("La fecha debe ser posterior a 2006.");
    if (!patronCorreo.test(valorCorreo)) listaErrores.push("Correo electrónico inválido.");
  
    if (listaErrores.length > 0) {
      alert("Errores encontrados:\n" + listaErrores.join("\n"));
    } else {
      alert("¡Formulario enviado con éxito!");
    }
  }
  
  document.getElementById('preguntasBtn').addEventListener('click', function () {
    const datoNacionalidad = prompt("¿Cuál es tu nacionalidad?");
    const datoColor = prompt("¿Cuál es tu color favorito?");
    const datoMascota = prompt("¿Cómo se llama tu mascota?");
  
    const contenedorRespuestas = document.getElementById('respuestas');
    contenedorRespuestas.innerHTML = `
      Respuestas registradas:<br>
      - Nacionalidad: ${datoNacionalidad}<br>
      - Color favorito: ${datoColor}<br>
      - Nombre de mascota: ${datoMascota}
    `;
  });
  
