/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {
	
	//put code here
	$('.nav-signup').on('click', function(){
		$('.signup-form').slideToggle('slow', function(){
		});
		$('.login-form').css("display","none");
	});

	$('.nav-login').on('click', function(){
		$('.signup-form').hide();
		$('.login-form').slideToggle('slow', function(){
		});
	});

	$('button.login-btn').on('click',function(){
		var loginEmail = $("#login-email-field").val();
				console.log(loginEmail);
		var loginPassword = $("#login-password-field").val();
				console.log(loginPassword);

		var user = {
			username : loginEmail,
			password : loginPassword
		}

		var userToken = codepen.api.login(user);
		console.log(userToken);

		if (userToken.success === true) {
			console.log("login successful");
		}
		else {
			alert(userToken.error);
		}
	});

	$('button.signup-btn').on('click',function(){
		var signupName = $('#signup-name-field').val();
		var signupEmail = $('#signup-email-field').val();
		var signupUserName = $('#signup-username-field').val();
		var signupPassOne = $('#signup-password-field').val();
		var signupPassTwo = $('#signup-password-field-confirm').val();
			if (signupPassOne === signupPassTwo) {
				var signupPassThree = signupPassOne;
			}
			else {
				alert('Your passwords do not match, please try again');
			}

		var user = {
			name : signupName,
			email : signupEmail,
			username : signupUserName,
			password : signupPassThree
		}

		var newUserToken = codepen.api.signup(user);
		console.log(newUserToken);

		if (newUserToken.success = true) {
			console.log("signup successful");
		}
		else {
			alert(newUserToken.error);
		}
	});

	// var getStarted = {};

	// getStarted.user {
	// 'username' :null,
	// 'password' :password,
	// 'createLogin' : function(username, password) {
	// 	this.username = username;
	// },
	// 'name' :null,
	// 'email' :null,
	// 'CreateSignup' : function(name, email) {
	// 	this.name = name
	// 	this.email = email
	// }
};


});