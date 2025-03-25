<?php

    $correo_usuario = "rubio.94@hotmail.com";

    // 📤 Correo para ti (administrador)
    $tu_correo = "rubio.94@hotmail.com"; // 👉 CAMBIA esto por tu correo real
    $asunto_admin = "🎉 Nuevo registro para el evento Burgerlandia";
    $mensaje_admin = "Se ha registrado el siguiente correo: $correo_usuario";
    $headers_admin = "From: info@burgerlandya.com";

    // 📥 Correo de confirmación para el usuario
    $asunto_usuario = "¡Gracias por registrarte en Burgerlandia! 🎪🍔";
    $mensaje_usuario = "Hola 👋,\n\nGracias por dejar tu correo. Te avisaremos cuando se acerque la fecha del evento.\n\n📅 Fecha: Jueves 5 de Mayo\n📍 Ubicación: Calle del amor y el odio 123, Jerez de la Frontera\n\n¡Nos vemos pronto!\nBurgerlandia 🎪🍔";
    $headers_usuario = "From: info@burgerlandia.com";

    // Envío de correos
    $enviado_a_admin = mail($tu_correo, $asunto_admin, $mensaje_admin, $headers_admin);
    $enviado_al_usuario = mail($correo_usuario, $asunto_usuario, $mensaje_usuario, $headers_usuario);

    if ($enviado_a_admin && $enviado_al_usuario) {
        echo "<script>alert('¡Gracias por registrarte! Te hemos enviado una confirmación.');window.history.back();</script>";
    } else {
        echo "<script>alert('Hubo un error al enviar los correos. Intenta de nuevo.');window.history.back();</script>";
    }

?>
