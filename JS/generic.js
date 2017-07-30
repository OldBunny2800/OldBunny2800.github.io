function standard(){
	$("li:not(:last-of-type)").append(document.createElement("br"));
	$("#done").click(function(){
		$("#video").show();
		$("#done").hide();
	});
	$(".progressbar").each(function()
	{
		$(this).progressbar(
		{
			value: $(this).data("data-progress-value");
		});
	});
}