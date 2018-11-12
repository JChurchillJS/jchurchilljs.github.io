/*
	CIS166AA: Serving Size JavaScript
	Author: Jessica Churchill
	Date: 09/18/2018
*/

// Initialize serving size
var input = 0;

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
}
