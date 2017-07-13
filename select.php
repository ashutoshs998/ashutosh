<!DOCTYPE html>
<html>
<head>
</head>
<body >
    <table border="1"cellpadding="10px" cellspacing="5px" align="center">
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

$fields_num = mysql_num_fields($result);

echo "<h4 align='center'>Top 5 Guest List </h4>";
echo "<table class='table' style='width: 70%;' border='2'align='center'><tr class='success'>";
echo "<th style='width: auto;'  >ID</th>";
echo "<th style='width: auto;' >Name</th>";
echo "<th style='width: auto;' >Email</th>";
echo "<th style='width: auto;' >Date</th>";
echo "<th style='width: auto;' >Messege</th>";
echo "</tr>\n";


// printing table rows
    while($row = mysql_fetch_row($result))
    {
        echo "<tr>";
        foreach($row as $cell)
            echo "<td>$cell</td>";

        echo "</tr>\n";
    }
mysql_free_result($result);
?>
</table></div>
 
  

</body>
</html>