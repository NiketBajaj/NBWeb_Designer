<?php 

	$name= $_REQUEST["name"];
 	$email_id= $_REQUEST["email_id"];
	$phone= $_REQUEST["phone"];
	$comment= $_REQUEST["comment"];
	
$str = "<p><strong>Dear Sir,";
$str .= "</strong>
	<br />Receive from Mobile Protfolio website.</p>
	<br />
	
		 	Name: ".$name."<br />
			Email Id: ".$email_id."<br />
			Daytime Phone: ".$phone."<br />
			Comments: ".$comment."<br />
			
		<br><br><br>
	<p>With Regards,<br>Mobile Protfolio website</p>";

$message = $str;
$to  ='200247801@student.georgianc.on.ca';

$subject = 'Receive from Mobile Protfolio website';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:Mobile Protfolio website<'.$email_id.'>' . "\r\n";
mail($to, $subject, $message, $headers);
header("location:thank_you.html");
?>