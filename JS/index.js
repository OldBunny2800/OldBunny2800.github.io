$(document).ready(function()
{
	standard();
	$("#userform").submit(function() {
		var username = $('#userform input[name="username"]').val();
		var userUrl = "https://oldbunny2800.github.io/Users/" + username + "/user.html";
		/* $.ajax({
			url : userUrl,
			type : "HEAD",
			error : function() {
				alert("User does not exist. Please contact Noah if this is in error.");
			},
			success : function() {
				window.location.replace(userUrl);
			}
		}); */
		var http = new XMLHttpRequest();
	    http.open('HEAD', userUrl, false);
	    http.send();
	    if(http.status == 404) {
	    		alert("User does not exist. Please contact Noah if this is in error.");
	    } else {
	    		window.location = userUrl;
	    }
	});
});