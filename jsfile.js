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
                	console.log(data);
                }
          });
    });
    setInterval(function() {
        fetchData();
    }, 1000);

    function fetchData() {
        $.ajax({
            type: 'POST',
            url: 'select.php',
            dataType: "json", 
            success: function(data) {
                if (data != '') {
                    $("#table tbody").empty();
                    var len = data.length;
                    console.log(data,len, 'data');
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
    return false; 
}
});
