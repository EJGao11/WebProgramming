 function applyStyles()
{
	var textR = document.getElementById("textR").value;
        var textG = document.getElementById("textG").value;
        var textB = document.getElementById("textB").value;

        var borderWidth = document.getElementById("borderWidth").value;

        var borderR = document.getElementById("borderR").value;
        var borderG = document.getElementById("borderG").value;
        var borderB = document.getElementById("borderB").value;

	var par = document.getElementById("paragraph");
	par.style.color = `rgb(${textR}, ${textG}, ${textB})`;
	par.style.borderWidth = borderWidth;
	par.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
}
