function password()
{
	var password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;

	if(password1.length < 8)
	{
		alert("The password length needs to be longer than 8");
	}
	else if(password1 != password2)
	{
		alert("The passwords don't match");
	}
	else
	{
		alert("Your Passwords are Good")
	}
}
