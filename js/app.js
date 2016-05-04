$(function() {

	for (var i=1; i <=100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			$('body').append("fizz buzz<br>");
		}
		else if (i % 3 === 0) {
			$('body').append("fizz<br>");
		}
		else if (i % 5 === 0) {
			$('body').append("buzz<br>");
		}
		else {
			$('body').append(i + '<br>');
		}
	}
});