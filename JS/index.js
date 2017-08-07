$(document).ready(function()
{
	standard();
	$("#userform").submit(function() {
		var username = $('#userform input[name="username"]').val();
		var userUrl = "http://oldbunny2800.github.io/Users/" + username + "/user.html/";
		$.ajax({
			url : userUrl,
			type : "HEAD",
			error : function() {
				alert("User does not exist. Please contact Noah if this is in error.");
			},
			success : function() {
				window.location.replace(url);
			}
		});
	});
});