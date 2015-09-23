$(document).mousemove(function( event ) {
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $('#coord').text(clientCoords);

  var vgender = chance.gender();

  $('#6').attr( "class", vgender == 'Female' ? "panel panel-danger" : "panel panel-info" );


  $('#2').text(chance.first({ gender: vgender }) + " " + chance.last() + " (" + vgender + ")" );
});


$(document).ready(function() {
	$('#btn1').click(function() {
	    alert("hello");
	});

	$('#btn2').click(function() {
		$('#6').toggle();
	});
});

$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        alert(e.which + " or Shift was pressed");
    }
});


setInterval(function() {
    $('#3').text(new Date);
}, 1000);

$(document).ready(function() {
	$.ajax({
		url: "data.json",
		//force to handle it as json
		dataType: "json",
		success: function(data) {

			$('#4').html(data.id + "</br>" + data.name + "</br>" + data.price + "</br>" + data.tags);
		}
	});

});
