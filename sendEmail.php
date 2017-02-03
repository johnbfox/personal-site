<?php
            if(isset($_POST['from']) && isset($_POST['subject']) && isset($_POST['message'])){
                $from = $_POST['from'];
                $subject = $_POST['subject'];
                $message = $_POST['message'];
				mail('jfox892@gmail.com', $subject, $message . "FROM: " . $from);
            }
?>

