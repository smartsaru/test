
$("#registerbutton").click(function() {
	var dataString = $("#register").serialize();
	$.ajax({
		type: "POST",
		url: "register_res.asp",
		data: dataString,
		cache: false,		
		success: function(html){
			$("#register_message").show("slow");
			$("#register_message").html(html);
		}
	});	
});	


function readImage(input) {
	if ( input.files && input.files[0] ) {
		var FR= new FileReader();
		FR.onload = function(e) {
			 $('#img').attr( "src", e.target.result );
			 $('#userimage').val( e.target.result );
		};       
		FR.readAsDataURL( input.files[0] );
	}
}

$("#uploadfile").change(function(){
	readImage( this );
});

$('#agreeTerms').change(function(){
    if ($(this).is(':checked')) {
		$("#registerbutton").prop('disabled', false);
    }
	else{
		$("#registerbutton").prop('disabled', true);
	}
	
});

    $('#userdob').datepicker({
        weekStart: 0,
        daysOfWeekHighlighted: "7,0",
        autoclose: true,
        todayHighlight: true,
    });
    $('#userdob').datepicker("setDate", new Date());
