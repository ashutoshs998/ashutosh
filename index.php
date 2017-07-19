<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="ajaxx.css">
  <link rel="stylesheet" href="bootstraplib.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="bootstrap.js"></script>
  <script src="jsfile.js"></script>
</head>
<body>
  <div class="form-group pull-center" id="sdiv">
      <input type="text" class="search form-control" id="search_data" placeholder="Search here">
  </div> 
  <div>
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add User</button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title" align="center">Enter User Details</h4>
         </div>

  <div class="modal-body">
    <div id="form-content"  align="center" >  
      <form  method="post" " align="center">
        <fieldset>

           <div class="form-group" align="left">
              <label for="name">Name:</label><br>
               <input type="text" name="name"class="form-control" id="pname" required> 
           </div>
      
           <div class="form-group" align="left">
              <label for="email">Email:</label><br>
              <input type="email" class="form-control" name="email" id="pemail" required>
           </div>

           <div class="form-group" align="left">
                 <label for="date">Date:</label><br>
                 <input type="date" class="form-control" name="date"  id="pdate" required>
           </div>

           <div class="form-group" align="left">
                <label for="messages">Messages:</label><br>
                <input type="text" class="form-control" name="messages" id="pmessage" required>
           </div>
       
                 <button type="submit" name="submit" class="btn-success"  id="save">Submit</button>
        </fieldset>
      </form>
    </div>
   </div> 
  </div>
  </div>
  </div>
  </div>
  <div class="container" align="center" style="overflow-x:auto;"></div> 
  <div class="text-center">
    <ul id="button"  class="pagination"></ul>
  </div>
</body>
</html>