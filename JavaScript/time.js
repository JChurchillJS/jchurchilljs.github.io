/*
	CIS166AA: Time/Date Functions
	Author: Jessica Churchill
	Date: 10/26/2018
*/

// Get amount of time elapsed since the date the user enters.
function getElapsedTime()
{
	// Create date objects and local variables
	var enteredDate = new Date(), currTime = new Date(), formDay = document.getElementById('day').value, formMonth = document.getElementById('month').value, formYear = document.getElementById('year').value,
		days, months, years, monthArr, result = document.getElementById('elapsedTime');
	
	// Set date objects from user input
	enteredDate.setDate(formDay);
	enteredDate.setMonth(formMonth - 1);  // Minus 1 because months = array (0 - 11)
	enteredDate.setFullYear(formYear);
	
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
	else if (formDay <= 0 || formMonth <= 0 || formYear <= 0)
	{
		result.innerHTML = "";
	}
	// If an invalid date is entered
	else if (formDay > 31 || formMonth > 12)
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