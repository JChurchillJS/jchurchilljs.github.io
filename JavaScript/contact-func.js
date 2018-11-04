/*
	CIS166AA: Contact Form Functions
	Author: Jessica Churchill
	Date: 11/02/2018
*/

// Variables for input fields
var humanYes = document.getElementById('humanYes'), humanNo = document.getElementById('humanNo'), humanMaybe = document.getElementById('humanMaybe'), fullName = document.getElementById('fullName'), emailAddress = document.getElementById('email'), phoneNumber = document.getElementById('phone'), proveHuman = document.getElementById('answer'), textBox = document.getElementById('comment');


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

// Reduce margin area
proveHuman.style.marginTop = "-20px";

// Create textarea, check box, and label elements
var commBox = document.createElement("textarea"), readyCheck = document.createElement("input"), label = document.createElement("label"), textNode = document.createTextNode(" I'm ready!");

// Output message or continue form depending on user radio choice
function checkIfHuman()
{
	try
	{
		// If user checks Yes and all previous fields contain text
		if (humanYes.checked && fullName.value !== "" && emailAddress.value !== "" && phoneNumber.value !== "")
		{
			// Clear any prior error messages
			proveHuman.innerHTML = "";
			// Reset text parameters
			proveHuman.style.color = 'black';
			proveHuman.style.fontSize = '1.2em';
			proveHuman.style.textAlign = "left";

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
		readyCheck.checked = false;
	}
}


// Dessert checkboxes variable
var desserts = document.getElementsByName('desserts');

// Display default message when all boxes are unchecked
if (desserts[0].checked == false && desserts[1].checked == false && desserts[2].checked == false && desserts[3].checked == false && desserts[4].checked == false &&
			desserts[5].checked == false)
	{
		commBox.innerHTML = "I don't like desserts.";
	}

// Get checked dessert items and concat to show favorite desserts in textarea
function getDesserts()
{
	// Hold checked box dessert values
	var favDesserts = "";

	// For each item in desserts array
	for (var i = 0; i < desserts.length; i++)
	{
		// If the dessert is checked
		if (desserts[i].checked)
		{
			// Add checked dessert values to checkedBoxes
			var checkedBoxes = desserts[i].value.toLowerCase();
			// Split the array into single values
			checkedBoxes = checkedBoxes.toString().split();
			// Add the single values to a new string variable
			favDesserts += ' and ' + checkedBoxes;
			// Regex to remove "and" from first part of string
			favDesserts = favDesserts.replace(/^ and /, '');
			// Display user's favorite desserts in textarea
			commBox.innerHTML = "I like " + favDesserts + ".";
		}
		// If all boxes are unchecked
		if (desserts[0].checked == false && desserts[1].checked == false && desserts[2].checked == false && desserts[3].checked == false && desserts[4].checked == false &&
			desserts[5].checked == false)
		{
			// Display default message
			commBox.innerHTML = "I don't like desserts.";
		}
	}
}


// Event listener for check boxes
for (var i = 0; i < desserts.length; i++)
{
	// Major browsers
	if (desserts[i].addEventListener)
	{
		desserts[i].addEventListener("input", getDesserts);
	}
	// Compatibe with IE8 or previous versions
	else if (desserts[i].attachEvent)
	{
		desserts[i].attachEvent("oninput", getDesserts);
	}
}


// Contact form variable
var form = document.getElementById('contact');

// Event listener for form validation for major browsers
if (form.addEventListener)
{
	form.addEventListener("submit", validateForm, false);
}
// Compatibe with IE8 or previous versions
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
	// If form has all valid input
	if (formValidity === true)
	{
		// Display alert message
		window.alert("Congrats, you've successfully completed the form!");
		// Submit form
		form.submit();
	}
}
