

var color = $(".selected").css("background-color");
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






//Once color span is changed, append it to the color palette. 

	//Then Select the New color


// On mouse events on the canvas

	//Draw lines