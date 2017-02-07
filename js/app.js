
$(document).ready(function(){

	$( function() {
    	$( document ).tooltip();
  	} );

	$(".form").sortable();
	$("#at").text("Please enter valid email");
	$("#email").keyup(function(){

		//Email Validity

		var at=$("#email").val().indexOf("@");
		var com=$("#email").val().indexOf(".com");
		if(at<=-1||com<=-1){
			$("#at").text("Not a valid Email");
		}
		else{
			$("#at").text("Email address is valid, thank you!");	
		}

	});

	// Full Name from first and last name

	$("#lastName").keyup(function(){

		var firstName=$("#firstName").val();
		var lastName=$("#lastName").val();
		var fullName=firstName.concat(" ").concat(lastName);
		$("#fullName").val(fullName);

	});



	// Password match checking

	$("#confirmPassword").keyup(function(){

		var password=$("#password").val();
		var confirmPassword=$("#confirmPassword").val();
		
		if(password==confirmPassword){

			$(".passMatch").text("Checked");

			$("#passMatch").removeClass("fa fa-times").addClass("fa fa-check");
			// innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
		}

		else{
			$("#passMatch").removeClass("fa fa-check").addClass("fa fa-times");
		}

		
	});

	$(".male").draggable();	
	$(".female").draggable();


	$("#gender").droppable({
		// accept:".female",
		drop:function(){
			$( "#gender" )
	          .find( "p" )
	            .html( "Gender selected!" );
		}
	

	});

	// $("#gender").droppable({
		
	// 	accept:".male",
	// 	drop:function(){
	// 		$( "#gender" )
	//           .find( "p" )
	//             .html( "Male selected!" );
	// 	}
	// });
	


});