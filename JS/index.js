$(document).ready(function()
{
	standard();
});
function submitUser() {
	var username = $('#userform input[name="username"]').val();
	var userUrl = "https://oldbunny2800.github.io/Users/" + username + "/user.html";
	var http = new XMLHttpRequest();
    http.open('HEAD', userUrl, false);
    http.send();
    if(http.status == 404) {
    		alert("User does not exist. Please contact Noah if this is in error.");
    } else {
    		window.location = userUrl;
    }
}