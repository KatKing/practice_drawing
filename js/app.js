

var color = $(".selected").css("background-color");
var  $canvas = $("canvas"); 

var ctx = $canvas[0].getContext("2d");
var lastEvent;
var mousedown = false;
//when clicking on control list items

$(".controls").on("click", "li", function(){

	//Deselect sibling elements 
	$(this).siblings().removeClass("selected");
	//select clicked element
	$(this).addClass("selected");

	color = $(this).css("background-color");

});
	

	//When "Add Color" is pressed Show or Hide Select Box Popup
	$("#revealColorSelect").click(function(){
		$("#colorSelect").toggle();
	});

	function changeColor(){
		var r = $("#red").val();
		var g = $("#green").val();
		var b = $("#blue").val();
		$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");

	}

	$("input[type=range]").change(changeColor);

	//When Add color is pressed
	$("#addNewColor").click(function(){

		var $newColor = $("<li> </li>");
		$newColor.css("background-color", $("#newColor").css("background-color"));
				$(".controls ul").append($newColor);
		//select new the new color
		$newColor.click();

	});

		$canvas.mousedown(function(e){
				lastEvent = e;
				mousedown = true;
		}).mousemove(function(e){
			if(mousedown){
		ctx.beginPath();
		ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.strokeStyle = color;
		ctx.stroke();
		lastEvent = e;
				}

		}).mouseup(function(){
			mousedown = false;
		}).mouseleave(function(){
			$canvas.mouseup();
		});

		


		




