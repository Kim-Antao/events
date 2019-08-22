$(document).ready(function() {


	$("#first_button").click(function() {
		$('#first_button').hide(400);
	});

$("li").on("click",function(){
	var classnames=$("this").attr("id").split("_");
$(".card").removeClass("highlight_stream");
$("."+classnames[0]).addClass("highlight_stream");
});


	$("h2").hover(function() {
		$("h2").addClass('light-blue');
	});
	$("p").on("click", function() {
		$("p").addClass("bg-red");
	});
	$("h2").mouseover(function() {


	});
	$(".bottom_button").mouseenter(function() {
		$("body").addClass('bg-black');
	});
	$(".bottom_button").mouseleave(function() {
		$("body").removeClass('bg-black');
	});
	$("#second_button").click(function(){
			$("#p2").toggle();
	});
	$("#third_button").click(function(){
		$("#p3").slideToggle('slow');
	})
	$("#fourth_button").mouseenter(function(){
		$("#fourth_button").fadeTo(1000,0.5);	
	});
		$("#fourth_button").mouseleave(function(){
		$("#fourth_button").fadeTo(1000,1);	
	});
});
