function standard(){
	$("li:not(:last-of-type)").append(document.createElement("br"));
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
}