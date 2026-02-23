$(document).ready(function () {
  // Cambiar entre formularios
  $("#showForgotPassword").on("click", function (e) {
    e.preventDefault();
    $("#loginSection").hide();
    $("#forgotSection").show();
    $("#forgotEmail").val("");
  });

  $("#showLogin").on("click", function (e) {
    e.preventDefault();
    $("#forgotSection").hide();
    $("#loginSection").show();
    $("#email").val("");
    $("#password").val("");
  });

  // Formulario de Login
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();

    // Validación básica
    if (email === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Mostrar loading
    $("#submitBtn")
      .prop("disabled", true)
      .html(
        '<span class="spinner-border spinner-border-sm" role="status"></span> Validando...',
      );

    // Ajax request
    $.ajax({
      url: "login.php",
      type: "POST",
      data: {
        email: email,
        password: password,
      },
      success: function (response) {
        if (response.trim() === "ok") {
          alert("BIENVENIDO");
        } else {
          alert("Datos incorrectos. Verifique su email y contraseña.");
        }
      },
      error: function () {
        alert("Error de conexión. Inténtalo de nuevo.");
      },
      complete: function () {
        $("#submitBtn").prop("disabled", false).html("Iniciar Sesión");
      },
    });
  });

  // Formulario de Recuperar Contraseña
  $("#forgotForm").on("submit", function (e) {
    e.preventDefault();

    var email = $("#forgotEmail").val();

    // Validación básica
    if (email === "") {
      alert("Por favor, ingresa tu email.");
      return;
    }

    // Validar formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    }

    // Mostrar loading
    $("#forgotSubmitBtn")
      .prop("disabled", true)
      .html(
        '<span class="spinner-border spinner-border-sm" role="status"></span> Enviando...',
      );

    // Simular envío
    setTimeout(function () {
      alert("Se ha enviado un enlace de recuperación a tu email.");
      $("#forgotEmail").val("");
      $("#forgotSubmitBtn").prop("disabled", false).html("Enviar");

      // Volver al login después del envío
      $("#forgotSection").hide();
      $("#loginSection").show();
    }, 2000);
  });
});
