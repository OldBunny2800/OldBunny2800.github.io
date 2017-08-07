$(document).ready(function()
{
	standard();
	$("#userform").submit(function() {
		var username = $("#userform input[name='username']").val();
		var url = "http://oldbunny2800.github.io/Users/" + username + "/user.html"
		$.ajax({
			url : url,
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