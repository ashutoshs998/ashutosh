$(document).ready(function(){
    $('#save').click(function(event){
        event.preventDefault();
        var name=$('#pname').val();
        var email=$('#pemail').val();
        var date=$('#pdate').val();
        var message=$('#pmessage').val();
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
                    "messages":message
                    },
            success: function (data) {
            $('input[type=text], textarea').val('');
            $('input[type=email], textarea').val('');
            $('input[type=date], textarea').val('');
                    }
              });
        });
        var fireAjax = true;
        var fetchLoop = setInterval(function() {
                $.ajax({
                type: 'POST',
                url: 'select.php',
                dataType: "json", 
                success: function(data) {
                    if (data != '') {
                        $("#table tbody").empty();
                        var len = data.length;
                        // console.log(data,len, 'data');
                        var txt = "";
                        if (len > 0) {
                            for (var i = 0; i < len; i++) {
                                $("#table").append("<tr><td>"+data[i].name+"</td>" 
                                    + "<td>"+data[i].email+"</td>" 
                                    +"<td>"+data[i].messages+"</td>" 
                                    +"<td>"+data[i].date+"</td></tr>");
                            }
                        }
                    }
                },
            });
            }, 1000);
            $("#search_data").keyup(function(){
            clearInterval(fetchLoop);
            var results;
            var search_data = $('#search_data').val();
            console.log(search_data, 'search_data');
            if(search_data != "")
              {
                $.ajax({
                     type: "POST",
                     url: 'search.php',
                     data: 'search='+search_data,
                     success: function(results){
                        var results = JSON.parse(results);
                        if (results != '') {
                            $("#table tbody").empty();
                            var len = results.length;
                            console.log(results,len, 'results');
                            var txt = "";
                            if (len > 0) {
                                for (var i = 0; i < len; i++) {
                                    $("#table").append("<tr><td>"+results[i].name+"</td>" 
                                        + "<td>"+results[i].email+"</td>" 
                                        +"<td>"+results[i].messages+"</td>" 
                                        +"<td>"+results[i].date+"</td></tr>");
                                }
                            }
                        }
                    },  
                });
            }
        else{
                $.ajax({
                type: 'POST',
                url: 'select.php',
                dataType: "json", 
                success: function(data) {
                    if (data != '') {
                        $("#table tbody").empty();
                        var len = data.length;
                        // console.log(data,len, 'data');
                        var txt = "";
                        if (len > 0) {
                            for (var i = 0; i < len; i++) {
                                $("#table").append("<tr><td>"+data[i].name+"</td>" 
                                    + "<td>"+data[i].email+"</td>" 
                                    +"<td>"+data[i].messages+"</td>" 
                                    +"<td>"+data[i].date+"</td></tr>");
                            }
                        }
                    }
                },
            });
        }
    });
});
