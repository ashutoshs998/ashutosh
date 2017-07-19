$(document).ready(function()
    {        
      $('#save').click(function(){
           var name=$('#pname').val();
           var email=$('#pemail').val();
           var date=$('#pdate').val();
           var messages=$('#pmessage').val();
           if(!name)
        {   
            alert("please enter name");
            event.preventDefault(); 
            exit();
        }
        if(!email)
        {   alert("please enter email");
            event.preventDefault(); 
            exit();
        }
        if (!validateEmail(email))
        {
            alert('Invalid Email Address');
            event.preventDefault();
            exit();
        }
        if(!date)
        {   alert ("please enter date");
            event.preventDefault();
            exit();
        }
        if (!message)
        {   alert("please fill message field");
            event.preventDefault();
            exit();
        }
        else
        {
            alert("Details Submitted Successfully");
        }   
        function validateEmail(email){
            var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
            if (filter.test(email))
            {
                return true;
            }
            else
            {
                return false;
            }
       }
      $.ajax({
            type: 'POST',
            url: 'insert.php',
            data: {
                  "name":name,
                  "email":email,
                  "date":date,
                  "messages":messages,
                    },
            success: function (response) {
      $('input[type=text], textarea').val('');
      $('input[type=email], textarea').val('');
      $("#myModal").modal("hide");
      $('#success__para').html("You data will be saved");
                      console.log(response);
                    }
                });    
    return true;
    });

        user(1);
    }); 

function user(number)
{
    var fetchdata="";

    $.ajax({ 
            type: "POST",
            data:{ "page": number},
            url: "select.php",             
            dataType: "html",
            success: function(rows)
            {
                rows = JSON.parse(rows);
                fetchdata=rows.data;
                table(fetchdata);
                nextpage=rows.count/5;
                nextpage=nextpage+1;
                button(nextpage);
             },
           });
}
function table(fetchdata) {
var data = "" 
    data+="<br /><h3><center><b>User List</center></b></h3>";
    data+="<div class='table-responsive'>";
    data+= "<table class='table'><tr>"; 
    data+=  "<th>Name</th>"+"<th>Email</th>"+"<th>Date</th>"+"<th>Messege</th>"+"</tr>\n";
    var len=fetchdata.length;
            for (var i=0;i<len;i++)
            {
                data+="<td>" + fetchdata[i].name+ "</td>"
                +"<td>" + fetchdata[i].email + "</td>"
                +"<td>" + fetchdata[i].date + "</td>"
                +"<td>" + fetchdata[i].messages + "</td>" +"</tr>";                
            }
    data+= "</table>";
    $(".container").html(data);
    
    var fetchloop;
     $("input").on('keyup', function()
      {
       var results="";
       clearTimeout(fetchloop);
       fetchloop = setTimeout(function()
        { 
         var search_data = $('#search_data').val();
         if(search_data != "")
          {
           var results = "<br /><h4><center><b>matched users</center></b></h4>";
           $.ajax(
            {
              type: "POST",
              url: 'search.php',
              data: { "search": search_data},
              dataType: 'json',
              success: function(result)
              {
               results+= "<div class='table-responsive'>";
               results+= "<table class='table''>";
               if(result==null)
                {
                 results+= "<tr>" +"<td >no data found</td>" +"</tr>";
                }
               else
                {
                 results+=  "<tr>"+"<th>Name</th>" +"<th>Email</th>" +"<th>date</th>" +
                             "<th>messages</th>" +
                            "</tr>";
                 var length=result.length;
                for (var i=0;i<length;i++)
                {
                    results+="<td>" + result[i].name+ "</td>" 
                    +"<td>" + result[i].email + "</td>" 
                    +"<td>" + result[i].date + "</td>" 
                    +"<td>" + result[i].messages + "</td>" +"</tr>";                  
                }
                }
               results+= "</table>";
               results+= "</div>";
               $(".container").html(results);
              },      
            });
          }
         else
          {
           $(".container").html(data);
          }
        }, 500);
      });  
    }

function button(totalpg)
    {
        var buttons = "<ul class='pagination' >"
            for (var i = 1; i<=totalpg; i ++) 
            {
                buttons +=  "<li><a id= "+i+" onclick= 'nextp(" +i+ ")' href= '#'>"+i+"</a></li>"
            }
        buttons += "</ul>";
    $(".pagination").html(buttons);
    }


var mainpage=1;
function nextp(number)
    {
        mainpage=number;
        user(number);
    }
