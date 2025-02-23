<?php
if(isset($_POST['Nombre']))
{
    $Nombre=$_POST['Nombre'];
    $Telefono=$_POST['Telefono'];
    $Correo=$_POST['Correo'];
    $Asunto=$_POST['Asunto'];
    $Texto=$_POST['Texto'];

    $to='rubio.94@hotmail.com, atencionalcliente@focustrendy.com';
    $message='Datos cliente
                Nombre = '.$Nombre.'
                Telefono = '.$Telefono.'
                Correo = '.$Correo.'
                Asunto = '.$Asunto.'
                Mensaje = '.$Texto.'';
    $subject='Enviaron un mensaje';

    $headers = 'MIME-Version: 1.0 \r\n';
    $headers .= 'Content-type: text/html; charset=UTF-8 \r\n';
    //$headers .= 'Bcc: ' . "\r\n";
    $headers .= 'From: FocusTrendy <atencionalcliente@focustrendy.com> \r\n' ;

    mail($to,$subject,$message, $headers);

    echo true;


}
else
{
    header('Location:index.html');
}

?>