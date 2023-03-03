<?php
	require_once '../config/initialize.php';

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require '../vendor/autoload.php';

	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
  $phone = $_POST['phone'];

if (is_post_request()) {

	if($name && $email && $message) {

		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {


    $mail = new PHPMailer(true);

    try { 

				$mail->Host = 'localhost';
				$mail->Username   = EMAIL;
				$mail->Password   = PASSWORD; 
				$mail->Port = 587;
				// email routing set to automatically detect

        //Recipients
        $mail->setFrom(EMAIL, 'Fractional-CRO');
        $mail->addAddress(EMAIL, 'Fractional-CRO Website');     // Add a recipient
        $mail->addReplyTo($email, $name);
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('robertmeans01@gmail.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Email from Fractional-CRO Website';
        $mail->Body    =  'Name: ' . $name . '<br>Email: ' . $email . '<br>Phone: ' . $phone . '<hr><br><br>' . nl2br($message);

        $mail->send();
		    // echo 'Message has been sent';
		    $signal = 'ok';
		    $msg =  'Message sent successfully';
	    } catch (Exception $e) {
	        $signal = 'bad';
	        $msg = 'Mail Error: {$mail->ErrorInfo}';
	    }

		} else {
		  $signal = 'bad';
		  $msg = 'Invalid email address. Please fix.';
		}

	} else {
		$signal = 'bad';
		$msg = 'At minimum, please include name, email and a message.';
	}

}
	$data = array(
		'signal' => $signal,
		'msg' => $msg
	);
	echo json_encode($data);

// stop

?>