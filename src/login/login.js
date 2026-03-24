document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.endsWith("@unimagdalena.edu.co")) {
    Swal.fire({
      title: "Acceso denegado",
      text: "Solo se permite el ingreso con correos institucionales @unimagdalena.edu.co",
      icon: "error",
      footer:
        "Si no tienes correo institucional, puedes continuar como invitado",
      confirmButtonText: "OK",
      confirmButtonColor: "#1f5fa8",
    });
    return;
  }

  const usuario = email.split("@")[0];
  localStorage.setItem("usuario", usuario);
  Swal.fire({
    title: "Bienvenido " + usuario,
    text: "Disfruta de los eventos que la Universidad del Magdalena tiene para ti",
    icon: "success",
    confirmButtonText: " OK",
    confirmButtonColor: "#1f5fa8",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../dashboard/logeado.html";
    }
  });
});
