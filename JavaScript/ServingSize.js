/*
	CIS166AA: Serving Size JavaScript
	Author: Jessica Churchill
	Date: 11/29/18
*/

// jQuery version of all functions

// Initial serving size of recipe
var initServing = parseFloat($('#servings').val());

// When the input changes
$(document).change(function()
{
	// For each child element of the ingredient list (only numbers)
	$('ul.ingredient li').children('span').each(function()
	{
		// Get numerical value of child element
        var value = parseFloat($(this).text());

        // Get value of new serving size
        var input = parseFloat($('#servings').val());
        // Calculate new values for ingredients
        var newValue = value * input / initServing;


        // Fraction function from fraction.js
        // Holds the integer portion of the number.
        var integer = Math.floor(newValue);
		// Holds the decimal portion of the number.
		var decimal = newValue % 1;
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
			integer = "";
		}


        // Replace text with the new value
        $(this).html(integer + " " + decimal);
	});
});



// Old functions

// Initialize serving size
/*var input = 0;

// Function to increase Baklava measurements when the user opts to increase the serving size of the baklava recipe.
function increaseBaklava()
{
	// Ingredient variables
	var phyllo = 1, nuts = 1, butter = 1, cinnamon = 1, water = 1, sugar = 1, vanilla = 1, honey = 0.5;
	// Base amount of servings from original recipe.
	var base = 18;

	// Get the serving size value in text field.
	input = document.getElementById('servings').value;

	// Multiply new serving size by each ingredient's amount, then divide by base amount of servings.
	// Change serving size to new value.
	if (input > 0)
	{
		document.getElementById('phyllo').innerHTML = toFraction(input * phyllo / base);
		document.getElementById('nuts').innerHTML = toFraction(input * nuts / base);
		document.getElementById('butter').innerHTML = toFraction(input * butter / base);
		document.getElementById('cinnamon').innerHTML = toFraction(input * cinnamon / base);
		document.getElementById('water').innerHTML = toFraction(input * water / base);
		document.getElementById('sugar').innerHTML = toFraction(input * sugar / base);
		document.getElementById('vanilla').innerHTML = toFraction(input * vanilla / base);
		document.getElementById('honey').innerHTML = toFraction(input * honey / base);
	}
}

// Function to increase Tiramisu measurements when the user opts to increase the serving size of the baklava recipe.
function increaseTiramisu()
{
	// Ingredient variables
	var eggs = 4, sugar = 0.5, wine = 0.33, cheese = 16, cream = 1, espresso = 2, liqueur = 3, powderedSugar = 3, ladyfingers = 48, cocoa = 2;
	// Base amount of servings from original recipe.
	var base = 12;

	// Get the serving size value in text field.
	input = document.getElementById('servings').value;

	// Multiply new serving size by each ingredient's amount, then divide by base amount of servings.
	// Change serving size to new value.
	if (input > 0)
	{
		document.getElementById('eggs').innerHTML = toFraction(input * eggs / base);
		document.getElementById('sugar').innerHTML = toFraction(input * sugar / base);
		document.getElementById('wine').innerHTML = toFraction(input * wine / base);
		document.getElementById('cheese').innerHTML = toFraction(input * cheese / base);
		document.getElementById('cream').innerHTML = toFraction(input * cream / base);
		document.getElementById('espresso').innerHTML = toFraction(input * espresso / base);
		document.getElementById('liqueur').innerHTML = toFraction(input * liqueur / base);
		document.getElementById('powderedSugar').innerHTML = toFraction(input * powderedSugar / base);
		document.getElementById('ladyfingers').innerHTML = toFraction(input * ladyfingers / base);
		document.getElementById('cocoa').innerHTML = toFraction(input * cocoa / base);
	}
}

// Function to increase Pavlova measurements when the user opts to increase the serving size of the baklava recipe.
function increasePavlova()
{
	// Ingredient variables
	var eggs = 4, fineSugar = 1, vanilla = 1, tartar = 0.5, cornstarch = 1, cream = 1.25, sugar = 3, vanillaTopping = 1;
	// Base amount of servings from original recipe.
	var base = 8;

	// Get the serving size value in text field.
	input = document.getElementById('servings').value;

	// Multiply new serving size by each ingredient's amount, then divide by base amount of servings.
	// Change serving size to new value.
	if (input > 0)
	{
		document.getElementById('eggs').innerHTML = toFraction(input * eggs / base);
		document.getElementById('fineSugar').innerHTML = toFraction(input * fineSugar / base);
		document.getElementById('vanilla').innerHTML = toFraction(input * vanilla / base);
		document.getElementById('tartar').innerHTML = toFraction(input * tartar / base);
		document.getElementById('cornstarch').innerHTML = toFraction(input * cornstarch / base);
		document.getElementById('cream').innerHTML = toFraction(input * cream / base);
		document.getElementById('sugar').innerHTML = toFraction(input * sugar / base);
		document.getElementById('vanillaTopping').innerHTML = toFraction(input * vanillaTopping / base);
	}
}

// Function to increase Daifuku measurements when the user opts to increase the serving size of the baklava recipe.
function increaseDaifuku()
{
	// Ingredient variables
	var flour = 1, water = 0.75, sugar = 0.75, paste = 0.5, beans = 1, ankoSugar = 1.5;
	// Base amount of servings from original recipe.
	var base = 8;

	// Get the serving size value in text field.
	input = document.getElementById('servings').value;

	// Multiply new serving size by each ingredient's amount, then divide by base amount of servings.
	// Change serving size to new value.
	if (input > 0)
	{
		document.getElementById('flour').innerHTML = toFraction(input * flour / base);
		document.getElementById('water').innerHTML = toFraction(input * water / base);
		document.getElementById('sugar').innerHTML = toFraction(input * sugar / base);
		document.getElementById('paste').innerHTML = toFraction(input * paste / base);
		document.getElementById('beans').innerHTML = toFraction(input * beans / base);
		document.getElementById('ankoSugar').innerHTML = toFraction(input * ankoSugar / base);
	}
}

// Function to increase Flan measurements when the user opts to increase the serving size of the baklava recipe.
function increaseFlan()
{
	// Ingredient variables
	var sugar = 1, eggs = 6, milk = 3, vanilla = 1.5, orange = 1;
	// Base amount of servings from original recipe.
	var base = 10;

	// Get the serving size value in text field.
	input = document.getElementById('servings').value;

	// Multiply new serving size by each ingredient's amount, then divide by base amount of servings.
	// Change serving size to new value.
	if (input > 0)
	{
		document.getElementById('sugar').innerHTML = toFraction(input * sugar / base);
		document.getElementById('eggs').innerHTML = toFraction(input * eggs / base);
		document.getElementById('milk').innerHTML = toFraction(input * milk / base);
		document.getElementById('vanilla').innerHTML = toFraction(input * vanilla / base);
		document.getElementById('orange').innerHTML = toFraction(input * orange / base);
	}
}*/
