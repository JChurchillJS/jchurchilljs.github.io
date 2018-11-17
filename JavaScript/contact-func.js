/*
	CIS166AA: Contact Form Functions
	Author: Jessica Churchill
	Date: 11/12/2018
*/

// Variables for input fields
var humanYes = document.getElementById('humanYes'), humanNo = document.getElementById('humanNo'), humanMaybe = document.getElementById('humanMaybe'), fullName = document.getElementById('fullName'), emailAddress = document.getElementById('email'), phoneNumber = document.getElementById('phone'), commBox = document.getElementById('comments');
// Error message variables
var fnError = document.getElementById('fnError'), eaError = document.getElementById('eaError'), pnError = document.getElementById('pnError'), hError = document.getElementById('hError'), cError = document.getElementById('cError');


function validateName(name)
{
	// Get value of input name
	name = fullName.value;
	// Only allow letters to be submitted
    var regex = /^[a-zA-Z\s-']+$/;

    try
    {
    	// If the field contains characters other than letters
		if (regex.test(name) === false)
		{
			// Throw error
			throw "Only letters, hyphens, and apostrophes are allowed.";
		}
		else
		{
			// Clear error message
			fnError.innerText = "";
		}
    }
    catch(error)
	{
		// Display error message
		fnError.innerText = error;
		// Set error text attributes
		fnError.style.color = 'red';
		fnError.style.fontSize = 'medium';
		fnError.style.textAlign = "center";
	}
}


function validateEmail(email)
{
	// Get user's email
	email = emailAddress.value;
	// Email format from text
	// Letters, numbers, dots, hyphens, and underscores allowed @ domain name (letters, hyphens, numbers) . domain (2-6 lowercase letters)
    var regex = /^[_a-zA-Z0-9-\.]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,6})$/;

    try
    {
    	// If user email doens't match email regex format
		if (regex.test(email) === false)
		{
			throw "Please enter a valid email address (format: user@domain.com).";
		}
		else
		{
			// Clear error message
			eaError.innerText = "";
		}
    }
    catch(error)
	{
		// Display error message
		eaError.innerText = error;
		// Set error text attributes
		eaError.style.color = 'red';
		eaError.style.fontSize = 'medium';
		eaError.style.textAlign = "center";
	}
}


function validatePhone(phone)
{
	// Get value of input phone number
	phone = phoneNumber.value;
	// 123-456-7890 or (123) 456-7890
    var regex = /^(\d{3}\-|\(\d{3}\)\s?)(\d{3})-(\d{4})$/;

    try
    {
    	// If field isn't in proper format (and contains more than numbers, hyphens and parenthesis)
		if (regex.test(phone) === false)
		{
			throw "Please enter a valid phone number (format: 123-456-7890 or (123)456-7890).";
		}
		else
		{
			// Clear error message
			pnError.innerText = "";
		}
    }
    catch(error)
	{
		// Display error message
		pnError.innerText = error;
		// Set error text attributes
		pnError.style.color = 'red';
		pnError.style.fontSize = 'medium';
		pnError.style.textAlign = "center";
	}
}


//
function checkIfHuman()
{
	try
	{
		// If user checks Yes
		if (humanYes.checked)
		{
			// Clear error message
			hError.innerHTML = "";
		}
		// If user checks No
		else if (humanNo.checked)
		{
			throw "Only humans may contact me.";
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
		hError.innerText = error;
		// Set error text attributes
		hError.style.color = 'red';
		hError.style.fontSize = 'medium';
		hError.style.textAlign = "center";
	}
}


function validateComment(comment)
{
	// Get value of comment box
	comment = commBox.value;
	// Only allow letters, numbers, and certain symbols to be submitted
    var regex = /^[a-zA-Z0-9\s\.,!\?'"]+$/;

    try
    {
    	// If the field contains characters other than letters, numbers and specified symbols
		if (regex.test(comment) === false)
		{
			// Throw error
			throw "Only symbols allowed: . ! ' , \" ?";
		}
		else
		{
			// Clear error message
			cError.innerText = "";
		}
    }
    catch(error)
	{
		// Display error message
		cError.innerText = error;
		// Set error text attributes
		cError.style.color = 'red';
		cError.style.fontSize = 'medium';
		cError.style.textAlign = "center";
	}
}


// Dessert checkboxes variable
var desserts = document.getElementsByName('desserts');

// Display default message when all boxes are unchecked
if (desserts[0].checked == false && desserts[1].checked == false && desserts[2].checked == false && desserts[3].checked == false && desserts[4].checked == false &&
			desserts[5].checked == false)
{
	commBox.value = "I don't like desserts.";
}

// Get checked dessert items and concat to show favorite desserts in textarea
function getDesserts()
{
	// Hold checked box dessert values
	var checkedBoxes = [];
	var favDesserts = "";

	// For each item in desserts array
	for (var i = 0; i < desserts.length; i++)
	{
		// If the dessert is checked
		if (desserts[i].checked)
		{
			// Add checked dessert values to array
			checkedBoxes.push(desserts[i].value.toLowerCase());
			// Separate array values with 'and' then add to string variable
			favDesserts = checkedBoxes.join(' and ');
			// Display user's favorite desserts in textbox
			var text = "I like " + favDesserts + ".";
			commBox.value = text;
		}
		// If all boxes are unchecked
		if (desserts[0].checked == false && desserts[1].checked == false && desserts[2].checked == false && desserts[3].checked == false && desserts[4].checked == false &&
			desserts[5].checked == false)
		{
			// Display default message
			commBox.value = "I don't like desserts.";
		}
	}
}




// Event Listeners

// Contact form variable
var form = document.getElementById('contact');

// Event listener for form validation for major browsers
if (window.addEventListener)
{
	fullName.addEventListener("change", validateName, false);
	emailAddress.addEventListener("change", validateEmail, false);
	phoneNumber.addEventListener("change", validatePhone, false);
	form.addEventListener("change", checkIfHuman, false);
	commBox.addEventListener("change", validateComment, false);
	form.addEventListener("submit", validateForm, false);
}
// Compatibe with IE8 or previous versions
else if (window.attachEvent)
{
	fullName.attachEvent("onchage", validateName);
	emailAddress.attachEvent("onchage", validateEmail);
	phoneNumber.attachEvent("onchage", validatePhone);
	form.attachEvent("onchange", checkIfHuman);
	commBox.attachEvent("onchange", validateComment);
	form.attachEvent("onsubmit", validateForm);
}


// Event listener for check boxes
for (var i = 0; i < desserts.length; i++)
{
	// Major browsers
	if (desserts[i].addEventListener)
	{
		desserts[i].addEventListener("change", getDesserts);
	}
	// Compatibe with IE8 or previous versions
	else if (desserts[i].attachEvent)
	{
		desserts[i].attachEvent("onchange", getDesserts);
	}
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

	// If all field values are contain correct info and no errors are thrown
	if (fnError.innerHTML === "" && eaError.innerHTML === "" && pnError.innerHTML === "" && hError.innerHTML === "" && cError.innerHTML === "")
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
		window.alert("You've successfully completed the form.");
		// Submit form
		form.submit();
	}
}
