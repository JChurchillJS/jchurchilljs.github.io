/*
	CIS166AA: Time/Date Functions
	Author: Jessica Churchill
	Date: 11/10/2018
*/

// Create date objects and local variables
	var enteredDate = new Date(), currTime = new Date(), formDay = document.getElementById('day'), formMonth = document.getElementById('month'), formYear = document.getElementById('year'), days, months, years, monthArr, result = document.getElementById('elapsedTime');



function validateMonth(month)
{
	// Get value of entered month
	month = formMonth.value;
	// Only allow numbers to be entered
    var regex = /^[0-9]+$/;

    try
    {
    	// If contains characters other than numbers
		if (regex.test(month) === false)
		{
			throw "Please enter a valid month (1 - 12).";
			result.innerHTML = "";
		}
    }
    catch(error)
	{
		// Display error message
		window.alert(error);
	}
}


function validateDay(day)
{
	// Get value of entered day
	day = formDay.value;
	// Only allow numbers to be entered
    var regex = /^[0-9]+$/;

    try
    {
    	// If contains characters other than numbers
		if (regex.test(day) === false)
		{
			throw "Please enter a valid day (1 - 31).";
			result.innerHTML = "";
		}
    }
    catch(error)
	{
		// Display error message
		window.alert(error);
	}
}


function validateYear(year)
{
	// Get value of entered year
	year = formYear.value;
	// Only allow numbers to be entered
    var regex = /^[0-9]+$/;

    try
    {
    	// If contains characters other than numbers
		if (regex.test(year) === false)
		{
			throw "Please enter a valid year (1 - 2018).";
			result.innerHTML = "";
		}
    }
    catch(error)
	{
		// Display error message
		window.alert(error);
	}
}


// Get amount of time elapsed since the date the user enters.
function getElapsedTime()
{
	// Set date objects from user input
	enteredDate.setDate(formDay.value);
	enteredDate.setMonth(formMonth.value - 1);  // Minus 1 because months = array (0 - 11)
	enteredDate.setFullYear(formYear.value);

	// Prevent user from entering a future date
	if (enteredDate > currTime)
	{
		window.alert("Please enter a date prior to today's date.");
	}
	// If user doesn't enter anything in a field
	else if (formDay === "" || formMonth === "" || formYear === "")
	{
		// Prevent calculations
		result.innerHTML = "";
	}
	// If user enters a negative number in a field
	else if (formDay.value <= 0 || formMonth.value <= 0 || formYear.value <= 0)
	{
		result.innerHTML = "";
	}
	// If an invalid date is entered
	else if (formDay.value > 31 || formMonth.value > 12)
	{
		result.innerHTML = "";
		window.alert("Please enter a valid date.");
	}
	else
	{
		// Subtract entered date from current date
		days = currTime.getDate() - enteredDate.getDate();
		months = currTime.getMonth() - enteredDate.getMonth();
		years = currTime.getFullYear() - enteredDate.getFullYear();

		// Get entered month
		monthArr = enteredDate.getMonth();

		// If entered days is less than current day
		if (days < 0)
		{
			// Subtract a month from elapsed months
			months -= 1;

			// Decide amount of days in a given month
			// If entered month is February
			if (month === 1)
			{
				// Add 28 days
				days += 28;
			}
			// If entered month is January, March, May, July, August, October, or December
			else if (monthArr === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11)
			{
				// Add 31 days
				days += 31;
			}
			// If it's any other month
			else
			{
				// Add 30 days
				days += 30;
			}
		}
		// If entered months is less than current month
		if (months < 0)
		{
			// Subtract a year from elapsed years and add 12 months
			years -= 1;
			months += 12;
		}

		// Display results
		result.innerHTML = years + " Years, " + months + " Months, " + days + " Days";
	}
}


// Event listeners with compatibility for IE8 or previous versions
if (window.addEventListener)
{
	formMonth.addEventListener("change", validateMonth, false);
	formDay.addEventListener("change", validateDay, false);
	formYear.addEventListener("change", validateYear, false);
	document.getElementById("submit").addEventListener("click", getElapsedTime, false);
}
else if (window.attachEvent)
{
	formMonth.attachEvent("onchange", validateMonth);
	formDay.attachEvent("onchange", validateDay);
	formYear.attachEvent("onchange", validateYear);
	document.getElementById("submit").attachEvent("onclick", getElapsedTime);
}
