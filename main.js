 function nouser() {
     var nouser = "";
     nouser = prompt("Para solicitar nuestros servicios debe estar registrado.\n\nDesea registrarse?Y/N");
     if ((nouser == "y") || (nouser == "Y")) {
         window.location.href = "contacto.html";
         return false;
     } else if ((nouser == "n") || (nouser == "N")) {
         return false;
     } else if (nouser == "" || nouser == null) {
         return false;
     } else {
         alert("Respuesta incorrecta");
     }

     return false;
 };

 $(document).ready(function() {
     /*let searchParams = new URLSearchParams(window.location.search);
     let c = searchParams.get("user");
     if (c != null) {
         document.getElementById("h1").innerHTML = c;
     }*/

     $("#iniciar").click(function() {
         var user = "user";
         var admin = "admin";
         var passwordUser = "567";
         var passwordAdmin = "123";
         var usuarioInput = $("#user").val();
         var claveInput = $("#password").val();
         var usuario = "";

         if ((user == usuarioInput) && (passwordUser == claveInput)) {
             usuario = user;
             localStorage.setItem("usu", usuario);
             window.location.href = "usersonly.html";
         } else if ((admin == usuarioInput) && (passwordAdmin == claveInput)) {
             usuario = admin;
             localStorage.setItem("usu", usuario);
             window.location.href = "adminsonly.html";
         } else {
             alert("usuario y/o clave invalida");
         }
         return false;
     });

     //boton cerrar
     $("#cerrar").click(function() {
         window.location.href = "index.html";
         localStorage.setItem("usu", "");
     });

     //validacion Transporte de contenedores
     $("#pedido1").click(function() {

         var origen1 = "";
         var destino1 = "";
         var fecha1 = "";

         var origen1 = $("#origen1").val();
         var destino1 = $("#destino1").val();
         var fecha11 = $("#fecha1").val();
         var fecha1 = new Date($("#fecha1").val());
         var fechahoy = new Date();

         //validacion Origen
         if (origen1 == null || origen1.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("origen1").style.borderColor = "red";
             document.getElementById("eorigen1").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen1").style.visibility = "hidden";
             document.getElementById("origen1").style.borderColor = "lightgreen";
         }

         if (origen1.length < 1 || origen1.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("origen1").style.borderColor = "red";
             document.getElementById("eorigen1").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen1").style.visibility = "hidden";
             document.getElementById("origen1").style.borderColor = "lightgreen";
         }

         //validacion Destino
         if (destino1 == null || destino1.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("destino1").style.borderColor = "red";
             document.getElementById("edestino1").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino1").style.visibility = "hidden";
             document.getElementById("destino1").style.borderColor = "lightgreen";
         }

         if (origen1.length < 1 || origen1.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("destino1").style.borderColor = "red";
             document.getElementById("edestino1").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino1").style.visibility = "hidden";
             document.getElementById("destino1").style.borderColor = "lightgreen";
         }

         //validacion Fecha
         if (fecha11 == null || fecha11.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("fecha1").style.borderColor = "red";
             document.getElementById("efecha1").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha1").style.visibility = "hidden";
             document.getElementById("fecha1").style.borderColor = "lightgreen";
         }

         if (fechahoy >= fecha1) {
             alert("Ingrese una fecha valida");
             document.getElementById("fecha1").style.borderColor = "red";
             document.getElementById("efecha1").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha1").style.visibility = "hidden";
             document.getElementById("fecha1").style.borderColor = "lightgreen";
         }

         alert("Su solicitud fue enviada correctamente, nos pondremos en contacto con usted lo antes posible");
     });

     //validacion Transporte de carga suelta
     $("#pedido2").click(function() {

         var origen2 = "";
         var destino2 = "";
         var fecha2 = "";

         var origen2 = $("#origen2").val();
         var destino2 = $("#destino2").val();
         var fecha21 = $("#fecha2").val();
         var fecha2 = new Date($("#fecha2").val());
         var fechahoy = new Date();

         //validacion Origen
         if (origen2 == null || origen2.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("origen2").style.borderColor = "red";
             document.getElementById("eorigen2").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen2").style.visibility = "hidden";
             document.getElementById("origen2").style.borderColor = "lightgreen";
         }

         if (origen2.length < 1 || origen2.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("origen2").style.borderColor = "red";
             document.getElementById("eorigen2").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen2").style.visibility = "hidden";
             document.getElementById("origen2").style.borderColor = "lightgreen";
         }

         //validacion Destino
         if (destino2 == null || destino2.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("destino2").style.borderColor = "red";
             document.getElementById("edestino2").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino2").style.visibility = "hidden";
             document.getElementById("destino2").style.borderColor = "lightgreen";
         }

         if (origen2.length < 1 || origen2.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("destino2").style.borderColor = "red";
             document.getElementById("edestino2").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino2").style.visibility = "hidden";
             document.getElementById("destino2").style.borderColor = "lightgreen";
         }

         //validacion Fecha
         if (fecha21 == null || fecha21.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("fecha2").style.borderColor = "red";
             document.getElementById("efecha2").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha2").style.visibility = "hidden";
             document.getElementById("fecha2").style.borderColor = "lightgreen";
         }

         if (fechahoy >= fecha2) {
             alert("Ingrese una fecha valida");
             document.getElementById("fecha2").style.borderColor = "red";
             document.getElementById("efecha2").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha2").style.visibility = "hidden";
             document.getElementById("fecha2").style.borderColor = "lightgreen";
         }

         alert("Su solicitud fue enviada correctamente, nos pondremos en contacto con usted lo antes posible");
     });

     //validacion Carga de Proyectos
     $("#pedido3").click(function() {

         var origen3 = "";
         var destino3 = "";
         var fecha3 = "";

         var origen3 = $("#origen3").val();
         var destino3 = $("#destino3").val();
         var fecha31 = $("#fecha3").val();
         var fecha3 = new Date($("#fecha3").val());
         var fechahoy = new Date();

         //validacion Origen
         if (origen3 == null || origen3.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("origen3").style.borderColor = "red";
             document.getElementById("eorigen3").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen3").style.visibility = "hidden";
             document.getElementById("origen3").style.borderColor = "lightgreen";
         }

         if (origen3.length < 1 || origen3.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("origen3").style.borderColor = "red";
             document.getElementById("eorigen3").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen3").style.visibility = "hidden";
             document.getElementById("origen3").style.borderColor = "lightgreen";
         }

         //validacion Destino
         if (destino3 == null || destino3.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("destino3").style.borderColor = "red";
             document.getElementById("edestino3").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino3").style.visibility = "hidden";
             document.getElementById("destino3").style.borderColor = "lightgreen";
         }

         if (origen3.length < 1 || origen3.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("destino3").style.borderColor = "red";
             document.getElementById("edestino3").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino3").style.visibility = "hidden";
             document.getElementById("destino3").style.borderColor = "lightgreen";
         }

         //validacion Fecha
         if (fecha31 == null || fecha31.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("fecha3").style.borderColor = "red";
             document.getElementById("efecha3").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha3").style.visibility = "hidden";
             document.getElementById("fecha3").style.borderColor = "lightgreen";
         }

         if (fechahoy >= fecha3) {
             alert("Ingrese una fecha valida");
             document.getElementById("fecha3").style.borderColor = "red";
             document.getElementById("efecha3").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha3").style.visibility = "hidden";
             document.getElementById("fecha3").style.borderColor = "lightgreen";
         }

         alert("Su solicitud fue enviada correctamente, nos pondremos en contacto con usted lo antes posible");
     });

     //validacion Transporte turistico
     $("#pedido4").click(function() {

         var origen4 = "";
         var destino4 = "";
         var fecha4 = "";

         var origen4 = $("#origen4").val();
         var destino4 = $("#destino4").val();
         var fecha41 = $("#fecha4").val();
         cantidadp = $("#cantidadp").val();
         var fecha4 = new Date($("#fecha4").val());
         var fechahoy = new Date();

         //validacion Origen
         if (origen4 == null || origen4.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("origen4").style.borderColor = "red";
             document.getElementById("eorigen4").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen4").style.visibility = "hidden";
             document.getElementById("origen4").style.borderColor = "lightgreen";
         }

         if (origen4.length < 1 || origen4.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("origen4").style.borderColor = "red";
             document.getElementById("eorigen4").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("eorigen4").style.visibility = "hidden";
             document.getElementById("origen4").style.borderColor = "lightgreen";
         }

         //validacion Destino
         if (destino4 == null || destino4.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("destino4").style.borderColor = "red";
             document.getElementById("edestino4").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino4").style.visibility = "hidden";
             document.getElementById("destino4").style.borderColor = "lightgreen";
         }

         if (origen4.length < 1 || origen4.length > 50) {
             alert("Intente con una direccion mas corta");
             document.getElementById("destino4").style.borderColor = "red";
             document.getElementById("edestino4").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("edestino4").style.visibility = "hidden";
             document.getElementById("destino4").style.borderColor = "lightgreen";
         }

         //validacion Cantidad de pasajeros
         if (cantidadp < 1 || cantidadp == null) {
             alert("Debe completar los campos con *");
             document.getElementById("cantidadp").style.borderColor = "red";
             document.getElementById("ecantidadp").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("ecantidadp").style.visibility = "hidden";
             document.getElementById("cantidadp").style.borderColor = "lightgreen";
         }

         //validacion Fecha
         if (fecha41 == null || fecha41.length == 0) {
             alert("Debe completar los campos con *");
             document.getElementById("fecha4").style.borderColor = "red";
             document.getElementById("efecha4").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha4").style.visibility = "hidden";
             document.getElementById("fecha4").style.borderColor = "lightgreen";
         }

         if (fechahoy >= fecha4) {
             alert("Ingrese una fecha valida");
             document.getElementById("fecha4").style.borderColor = "red";
             document.getElementById("efecha4").style.visibility = "visible";
             return false;
         } else {
             document.getElementById("efecha4").style.visibility = "hidden";
             document.getElementById("fecha4").style.borderColor = "lightgreen";
         }

         alert("Su solicitud fue enviada correctamente, nos pondremos en contacto con usted lo antes posible");
     });
     //Funciones no permitir caracteres extraños
     $('#nombre').on('input', function() {
         this.value = this.value.replace(/[^a-zA-Z/ ]/g, '');
     });
     $('#apellido').on('input', function() {
         this.value = this.value.replace(/[^a-zA-Z/ ]/g, '');
     });
     $('#telefono').on('input', function() {
         this.value = this.value.replace(/[^0-9\^-]/g, '');
     });

     // Funcion para formulario de contactos
     $("#enviar").click(function() {
         var province = "";
         var name = "";
         var lname = "";
         var phone = "";
         var mail = "";
         var txt;
         var expcorreo = /\w+@\w+\.+[a-z]/;
         var exptelefono = /\d{3}\-\d{3}\-\d{4}/;

         var province = $("#provincia").val();
         var name = $("#nombre").val();
         var lname = $("#apellido").val();
         var phone = $("#telefono").val();
         var mail = $("#correo").val();

         //Validadcion provincia
         if (province === '') {
             document.getElementById("provincia").focus();
             txt = "El pais debe ser seleccionado";
             document.getElementById("eprovincia").innerHTML = txt;
             document.getElementById("provincia").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("eprovincia").innerHTML = "";
             document.getElementById("provincia").style.borderColor = "lightgreen";
         }

         //validacion de nombre

         if (name.length < 1) {
             document.getElementById("nombre").focus();
             txt = "No se ha introducido ningun nombre";
             document.getElementById("enombre").innerHTML = txt;
             document.getElementById("nombre").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("enombre").innerHTML = "";
             document.getElementById("nombre").style.borderColor = "lightgreen";
         }

         for (var i = 0; i < name.length; i++) {
             var caracter = name.charAt(i);
             if (caracter == " ") {
                 document.getElementById("nombre").focus();
                 txt = "No se admiten espacios en el campo nombre";
                 document.getElementById("nombre").style.borderColor = "red";
                 document.getElementById("enombre").innerHTML = txt;
                 return false;
             } else {
                 document.getElementById("enombre").innerHTML = "";
                 document.getElementById("nombre").style.borderColor = "lightgreen";
             }
         }


         if ((name.length < 2) || (name.length > 15)) {
             document.getElementById("nombre").focus();
             txt = "El nombre introducido es muy corto/largo";
             document.getElementById("enombre").innerHTML = txt;
             document.getElementById("nombre").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("enombre").innerHTML = "";
             document.getElementById("nombre").style.borderColor = "lightgreen";
         }

         //validacion de apellido
         if (lname.length < 1) {
             document.getElementById("apellido").focus();
             txt = "No se ha introducido ningun apellido";
             document.getElementById("eapellido").innerHTML = txt;
             document.getElementById("apellido").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("eapellido").innerHTML = "";
             document.getElementById("apellido").style.borderColor = "lightgreen";
         }

         for (var i = 0; i < lname.length; i++) {
             var caracter = lname.charAt(i);
             if (caracter == " ") {
                 document.getElementById("apellido").focus();
                 txt = "No se admiten espacios en el campo apellido";
                 document.getElementById("apellido").style.borderColor = "red";
                 document.getElementById("eapellido").innerHTML = txt;
                 return false;
             } else {
                 document.getElementById("eapellido").innerHTML = "";
                 document.getElementById("apellido").style.borderColor = "lightgreen";
             }
         }

         if ((lname.length < 2) || (lname.length > 15)) {
             document.getElementById("apellido").focus();
             txt = "El nombre introducido es muy corto/largo";
             document.getElementById("eapellido").innerHTML = txt;
             document.getElementById("apellido").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("eapellido").innerHTML = "";
             document.getElementById("apellido").style.borderColor = "lightgreen";
         }

         //validacion de telefono
         if (phone.length < 1) {
             document.getElementById("telefono").focus();
             txt = "No se ha introducido ningun telefono";
             document.getElementById("etelefono").innerHTML = txt;
             document.getElementById("telefono").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("etelefono").innerHTML = "";
             document.getElementById("telefono").style.borderColor = "lightgreen";
         }

         if (!exptelefono.test(phone)) {
             document.getElementById("telefono").focus();
             txt = "Formato incorrecto. Intente uno Ej. 809-000-0000";
             document.getElementById("etelefono").innerHTML = txt;
             document.getElementById("telefono").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("etelefono").innerHTML = "";
             document.getElementById("telefono").style.borderColor = "lightgreen";
         }

         //validacion de correo
         if (mail.length < 1) {
             document.getElementById("correo").focus();
             txt = "No se ha introducido ningun correo";
             document.getElementById("ecorreo").innerHTML = txt;
             document.getElementById("correo").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("ecorreo").innerHTML = "";
             document.getElementById("correo").style.borderColor = "lightgreen";
         }

         if (!expcorreo.test(mail)) {
             document.getElementById("correo").focus();
             txt = "Formato incorrecto. Intente uno Ej. user@quikly.com";
             document.getElementById("ecorreo").innerHTML = txt;
             document.getElementById("correo").style.borderColor = "red";
             return false;
         } else {
             document.getElementById("ecorreo").innerHTML = "";
             document.getElementById("correo").style.borderColor = "lightgreen";
         }
         alert("Nos pondremos en contacto con usted lo antes posible");
     });


 });
