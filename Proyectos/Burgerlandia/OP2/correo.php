<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Cargar archivos necesarios
require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

    $correo_usuario = "rubio.94@hotmail.com";

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'mail.burgerlandya.com'; // ejemplo: mail.burgerlandya.com
        $mail->SMTPAuth = true;
        $mail->Username = 'info@burgerlandya.com';
        $mail->Password = 'Abrir2025+'; // ⚠️ confidencial
        $mail->SMTPSecure = 'ssl'; // o 'tls' dependiendo de tu cPanel
        $mail->Port = 465; // o 587 para TLS

        // Emisor y destinatarios
        $mail->setFrom('info@burgerlandya.com', 'Burgerlandia');
        $mail->addAddress('info@burgerlandya.com'); // tu notificación
        $mail->addAddress($correo_usuario); // usuario que se registró

        $mail->isHTML(true);
        $mail->Subject = '🎪 ¡Gracias por registrarte en Burgerlandia!';
        $mail->Body = '
        <html>
        <body style="font-family: Nunito, Arial; background-color: #fff7e6; color: #1A1423; padding: 20px;">
            <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; padding: 30px;">
                <h2 style="color: #a9232b;">🎪 ¡Gracias por registrarte en Burgerlandia! 🍔</h2>
                <p>Hola 👋, gracias por dejar tu correo.</p>
                <ul style="font-size: 1rem;">
                    <li>📅 <strong>Fecha:</strong> Jueves 5 de Mayo</li>
                    <li>🕒 <strong>Hora:</strong> 16:00 - 22:00</li>
                    <li>📍 <strong>Ubicación:</strong> Calle del amor y el odio 123, Jerez de la Frontera</li>
                </ul>
                <p>Pronto te mandaremos un recordatorio para que no te lo pierdas 🎉.</p>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="https://www.google.com/maps?q=Holea+Huelva" style="padding: 12px 20px; background: #fb8b07; color: white; border-radius: 8px; text-decoration: none;">Ver ubicación en el mapa</a>
                </div>
            </div>
        </body>
        </html>';

        $mail->send();
        echo "<script>alert('¡Correo enviado con éxito! Revisa tu bandeja.');window.history.back();</script>";

    } catch (Exception $e) {
        echo "<script>alert('Error al enviar el correo: " . $mail->ErrorInfo . "');window.history.back();</script>";
    }

?>
