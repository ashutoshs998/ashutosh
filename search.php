<?php 
  
$servername = 'localhost';
$username = 'excelarf';
$password = '**T0y*6z8e0c';
$dbname = 'excelarf_ashutosh_m';

$conn = mysqli_connect($servername, $username, $password, $dbname);
$s=$_POST['search'];
  $result =mysqli_query($conn,"SELECT * FROM `guest` WHERE `name` LIKE '%$s%' OR `email` LIKE '%$s%' OR `messages` LIKE '%$s%' OR `date` LIKE '%$s%'");
  if ($result)
{
    while($row = mysqli_fetch_assoc($result))
    {      
        $data[] = $row;
    }
    echo json_encode($data);
}
?>

