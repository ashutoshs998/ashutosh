$(document).ready(function(){

 	$('#save').click(function(){
           var name=$('#pname').val();
           var email=$('#pemail').val();
           var date=$('#pdate').val();
           var message=$('#pmessage').val();
		if(!name)
		{	exit();
			alert("please enter name");
			event.preventDefault();	
		}	
		if(!email)
		{	alert("please enter email");
			event.preventDefault();	
		}
		if (!validateEmail(email))
		{
			alert('Invalid Email Address');
			e.preventDefault();
		}	
		if(!date)
		{	alert ("please enter date");
			event.preventDefault();
		}
		if (!message)
		{	alert("please fill message field");
			event.preventDefault();
		}
		else
		{	
			alert("Details Submitted Successfully");
		}	
      function validateEmail(email)
	{
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
            success: function (response) {
			$('input[type=text], textarea').val('');
			$('input[type=email], textarea').val('');
						
			$('#success__para').html("You data will be saved");
                    	console.log(response);
                    }
                });
    return false;
    });

	auto_load(); 
});

setInterval(auto_load,1000);

function auto_load(){

    $.ajax({
    url: "select.php",
    cache: false,
    success: function(data){
    $("#tablediv").html(data);
    }
});

}

 


