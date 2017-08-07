$(document).ready(function() {
	standard();
	$("li").each(function() {
		var link = document.createElement("a");
		link.setAttribute("href", "/Users/Mom/" + $(this).index() + ".html")
		link.innerHTML = $(this).attr("data-lesson-name");
		$(this).prepend(link);
	});
});