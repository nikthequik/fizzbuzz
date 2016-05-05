$(function() {

	function fizzbuzz(integer) {
		integer = parseInt(integer);
		if (!integer) {
			alert('That was not a number.  Try again.');
		}
		else {
			for (var i=1; i <= integer; i++) {
				if (i % 3 === 0 && i % 5 === 0) {
					$('body').append("<p><b>fizz buzz</b></p><br>");
				}
				else if (i % 3 === 0) {
					$('body').append("<p>fizz</p>");
				}
				else if (i % 5 === 0) {
					$('body').append("<p>buzz</p>");
				}
				else {
					$('body').append("<p>" + i + "</p>");
				}
			}
		}
	};

	$('#submission').on('click', function(){
		var number = $('#userInput').val();
		fizzbuzz(number); 
	});
});