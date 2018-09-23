/*
	CIS166AA: Fraction JavaScript
	Author: Jessica Churchill
	Date: 09/18/2018
*/

// Uses the decimal to convert to typical cup measurement sizes (fractions).
function toFraction(number)
{
	// Holds the integer portion of the number.
	var integer = Math.floor(number);
	// Holds the decimal portion of the number.
	var decimal = number % 1;
	
	// Fraction variables
	var half = "1/2", oneThird = "1/3", twoThird = "2/3", oneFourth = "1/4", threeFourth = "3/4";
	
	// If the decimal is higher than an amount, and lower than another amount, the rounded fraction is assigned.
	if (decimal < 0.15)
	{
		// Make the amount into a whole number by removing decimal completely.
		decimal = "";
	}
	else if (decimal >= 0.15 && decimal < 0.3)
	{
		// Decimal becomes 1/4
		decimal = oneFourth;
	}
	else if (decimal >= 0.3 && decimal < 0.44)
	{
		// Decimal becomes 1/3
		decimal = oneThird;
	}
	else if (decimal >= 0.44 && decimal < 0.56)
	{
		// Decimal becomes 1/2
		decimal = half;
	}
	else if (decimal >= 0.56 && decimal < 0.69)
	{
		// Decimal becomes 2/3
		decimal = twoThird;
	}
	else if (decimal >= 0.69 && decimal < 0.85)
	{
		// Decimal becomes 3/4
		decimal = threeFourth;
	}
	else
	{
		// Remove decimal and add 1 to the integer.
		decimal = "";
		integer += 1;
	}
	
	if (integer == 0)
	{
		// Remove the integer portion if it equals 0, leaving only the decimal (fraction).
		integer="";
	}
	
	// Return the integer and the new decimal converted into a fraction.
	return integer + " " + decimal;	
}