<?php
    $db_host = 'localhost';
    $db_user = 'excelarf';
    $db_pwd = '**T0y*6z8e0c';
    $database = 'excelarf_ashutosh_m';
    $table = 'guest';

if (!mysql_connect($db_host, $db_user, $db_pwd))
    die("Can't connect to database");

if (!mysql_select_db($database))
    die("Can't select database");
$result = mysql_query("SELECT * FROM guest ORDER BY id DESC LIMIT 5");
if (!$result)
    {
        die("Query to show fields from table failed");
    }
 $json_response = array();
 while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    array_push($json_response,$row);
 }
 echo json_encode($json_response);
 ?>


 