<?php

if ( isset( $_POST['name'] ) && !empty( $_POST['name'] ) )
    {
        $name = $_POST['name'];
    }
if( isset( $_POST['email'] ) && !empty( $_POST['email'] ) )
    {
       $email = $_POST['email'];
    } 
if( isset( $_POST['date'] ) && !empty( $_POST['date'] ) )
    {
       $date = $_POST['date'];
    } 
if( isset( $_POST['messages'] ) && !empty( $_POST['messages'] ) )
    {
       $messages = $_POST['messages'];
    }
else{
	alert("please fill all details");
	exit();
	}
    
$servername = 'localhost';
$username = 'root';
$password = '123';
$dbname = 'ajaxdb';

$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn->connect_error) 
    {
        die("Connection failed: " . $conn->connect_error);
    }
mysql_select_db("$sql", $conn);


$sql = "INSERT INTO guest (name, email, date, messages) VALUES ('$name','$email','$date','$messages')";
if (!$conn->query($sql) === TRUE)
{ 

        echo "Error: " . $sql . "<br>" . $conn->error;
    }

$conn->close();
?>