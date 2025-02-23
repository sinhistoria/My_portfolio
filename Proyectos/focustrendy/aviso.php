<?php

$Nombre=$_POST['aviso'];

$to='rubio.94@hotmail.com';
$message='Se ha realizado un Pago.';
$subject='Revisa Paypal.';
$headers = 'MIME-Version: 1.0 \r\n';
$headers .= 'Content-type: text/html; charset=UTF-8 \r\n';
//$headers .= 'Bcc: ' . "\r\n";
$headers .= 'From: FocusTrendy <atencionalcliente@focustrendy.com> \r\n' ;

mail($to,$subject,$message, $headers);

echo true;


?>