<?php
    $servername = 'localhost';
$username = 'root';
$password = '123';
$dbname = 'ajaxdb';

$conn = mysqli_connect($servername, $username, $password, $dbname);
$end = 5;
if(isset($_POST["page"]))
    {
        $page = intval($_POST["page"]);
    }
else    {
        $page =1 ;
        }
$start = (($page-1) * $end);

$result=mysqli_query($conn,"select * from `guest` order by `id` desc limit {$start},{$end}");
  $count=mysqli_num_rows($result);      
if ($count> 0)
{
    while($row = mysqli_fetch_assoc($result))
    {      
        $tmp[] = $row;
    }
}
else    {
        echo "0 results";
        }

$result = mysqli_query($conn,"select count(*) from `guest`");
$rows = mysqli_num_rows($result);

$total = $result->fetch_row()[0];

echo  "{ \"data\":".json_encode($tmp).", \"count\":". $total." }";
 
$conn->close();

?>

 