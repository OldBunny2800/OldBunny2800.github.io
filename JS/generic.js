function standard(){
	$("#video").hide();
	$(".message").hide();
	$("li:not(:last-of-type)").append(document.createElement("br"), document.createElement("br"));
	$("#done").click(function(){
		$("#video").show();
		$("#done").hide();
		$(".message").show();
	});
	$(".progressbar").each(function()
	{
		$(this).progressbar(
		{
			value: $(this).data("progress-value")
		}).children(".ui-progressbar-value").html($(this).data("progress-value").toString() + "%");
	});
	if($(location).attr("path") != "/Users/Mom/0.html")
	{
		$("#done").hide();
		challenge.done(function()
		{
			$("#done").show();
		});
	}
}