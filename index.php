<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="ajaxx.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="jsfile.js"></script>
</head>
<body >
  <table id="table"> 
    <thead>
      <tr>
        <th>name</th>
        <th>email</th>
        <th>message</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody class="tbody" id="table"></tbody>
  </table>
  <br>
  <div class="container" id="form-content"  align="center" >
    <form  method="post" align="center">
      <fieldset>
        <legend>Enter Guest Details</legend>
        <div align="left">
          <label for="name">Name:</label>
          <input type="text" name="name" id="pname" placeholder="Enter Name here" required> 
        </div>
        <div align="left">
          <label for="email">Email:</label>
          <input type="email" name="email" id="pemail" placeholder="Enter Email" required>
        </div>
        <div align="left">
          <label for="date">Date:</label><br>
          <input type="date" name="date"  id="pdate" required>
        </div>
        <div align="left">
          <label for="messages">Messages:</label>
          <input type="text" class="form-control" name="messages" id="pmessage" placeholder="Enter Messages" required>
        </div>
        <button type="submit" class="btn-success" style="float: right;" id="save">Submit</button>
      </fieldset>
    </form>
  </div>
</body>
</html>

