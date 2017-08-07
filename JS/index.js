$(document).ready(function()
{
	standard();
	$("#userform").submit(function() {
		var username = $('#userform input[name="username"]').val();
		var userUrl = "https://oldbunny2800.github.io/Users/" + username + "/user.html";
		console.log(userUrl); // This might be the problem.
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