/*
	CIS166AA: Contact Form Functions
	Author: Jessica Churchill
	Date: 10/19/2018
*/


// Variables for input fields
var humanYes = document.getElementById('humanYes'), humanNo = document.getElementById('humanNo'), humanMaybe = document.getElementById('humanMaybe'), fullName = document.getElementById('fullName'),
	emailAddress = document.getElementById('email'), phoneNumber = document.getElementById('phone'), proveHuman = document.getElementById('answer'), textBox = document.getElementById('comment');


// Exception handling for blank input
function checkInput()
{
	// Set custom validity messages for fields
	if (fullName.value === "")
	{
		fullName.setCustomValidity("Please enter your name.");
	}
	if (emailAddress.value === "")
	{
		emailAddress.setCustomValidity("Please enter your email address.");
	}
}

// Create input box element
var input = document.createElement("input");
// Set to accept text
input.setAttribute('type', 'text');
input.style.padding = "3px 5px";
// Default value
input.placeholder = "Not Human";

// Reduce margin area
proveHuman.style.marginTop = "-20px";

// Create textarea, check box, and label elements
var commBox = document.createElement("textarea"), readyCheck = document.createElement("input"), label = document.createElement("label"), textNode = document.createTextNode("I'm ready, submit the form already!");

// Output message or continue form depending on user radio choice
function checkIfHuman()
{	
	try
	{
		// If user checks Yes and all previous fields contain text
		if (humanYes.checked && fullName.value !== "" && emailAddress.value !== "" && phoneNumber.value !== "" && phoneNumber.value > 999999999)
		{
			// Clear any prior error messages
			proveHuman.innerHTML = "";
			// Reset text parameters
			proveHuman.style.color = 'black';
			proveHuman.style.fontSize = '1.2em';
			proveHuman.style.textAlign = "left";
			
			// Display message asking user to input HUMAN to proceed
			proveHuman.innerHTML = "Prove it.  Type 'HUMAN': ";
			// Attach input box element next to text
			proveHuman.append(input);
			// Make input uppercase for validation
			input.value = input.value.toUpperCase();
			
			// If user correctly inputs HUMAN
			if (input.value == 'HUMAN')
			{
				// Set textarea to accept text
				commBox.setAttribute('type', 'text');
				// Set parameters
				commBox.style.padding = "3px 5px";
				commBox.style.width = "100%";
				commBox.style.height = "12vw";
				
				// Display message asking user to leave comments in the text box
				textBox.innerHTML = "When you're ready, please select the checkbox and submit your comments.<br>";
				// Attach text box element under newly displayed text
				textBox.append(commBox);
				
				// Set input type to checkbox
				readyCheck.type = "checkbox";
				// Add text node to label
				label.append(textNode);
				
				// Attach checkbox and label to end to prompt user to submit the form
				textBox.append(readyCheck);
				textBox.append(label);
			}
		}
		// If user checks No
		else if (humanNo.checked)
		{
			throw "Only humans may proceed beyond this point.";
		}
		// If user checks Maybe
		else if (humanMaybe.checked)
		{
			throw "Not good enough!";
		}
	}
	catch(error)
	{
		// Display error message
		proveHuman.innerText = error;
		// Set error text parameters
		proveHuman.style.color = 'red';
		proveHuman.style.fontSize = 'large';
		proveHuman.style.textAlign = "center";
		
		// Reset text fields and end checkbox
		textBox.innerHTML = "";
		input.value = "";
		readyCheck.checked = false;
	}
}


// Get checked dessert items and concat to show favorite desserts in textarea
function getDesserts()
{
	// Dessert class variable
	var desserts = document.getElementsByName('desserts');
	// Hold checked box values
	var checkedBoxes = "";
	
	// For each item in desserts array
	for (var i = 0; i < desserts.length; i++)
	{
		// If the dessert is checked
		if (desserts[i].checked)
		{
			// Add checked dessert values to variable checkedBoxes
			checkedBoxes += " and " + desserts[i].value;
			// Remove "and" from first part of string
			var favDesserts = checkedBoxes.replace(/^ and /, '');
			// Display user's favorite desserts in textarea
			commBox.innerHTML = "I like " + favDesserts + ".";
		}
	}
}


// Contact form variable
var form = document.getElementById('contact');

// Event listener for form validation
if (form.addEventListener)
{
	form.addEventListener("submit", validateForm, false);
}
else if (form.attachEvent)
{
	form.attachEvent("onsubmit", validateForm);
}


// Prevent form from submitting if errors are present
function validateForm(event)
{
	if (event.preventDefault)
	{
		// Prevent form from submitting
		event.preventDefault();
	}
	else
	{
		// Prevent form from submitting in IE8
		event.returnValue = false;
	}
	
	// When input fields haven't been answered correctly
	if (readyCheck.checked)
	{
		// Form is able to submit
		formValidity = true;
	}
	// Reset value for revalidation
	else
	{
		formValidity = false;
	}
	// If form has all valid inputs
	if (formValidity === true)
	{
		// Display alert message
		window.alert("Congrats, you've successfully completed the form!");
		// Submit form
		form.submit();
	}
}