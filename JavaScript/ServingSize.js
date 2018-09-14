// Initialize serving size
var input = 0;

// Baklava variables
var phyllo = 1, nuts = 1, butter = 1, cinnamon = 1, water = 1, sugar = 1, vanilla = 1, honey = 0.5;

// Tiramisu variables
var phyllo = 1, nuts = 1, butter = 1, cinnamon = 1, water = 1, sugar = 1, vanilla = 1, honey = 0.5;

// Function to increase measurements when the user opts to increase the serving size of the baklava recipe.
function increaseBaklava()
{
	// Get the serving size value in text field.
	input = document.getElementById('servings').value;
	
	// Multiply new serving size by each ingredient's amount.
	// Change serving size to new value.
	document.getElementById('phyllo').innerHTML = input * phyllo;
	document.getElementById('nuts').innerHTML = input * nuts;	
	document.getElementById('butter').innerHTML = input * butter;	
	document.getElementById('cinnamon').innerHTML = input * cinnamon;	
	document.getElementById('water').innerHTML = input * water;	
	document.getElementById('sugar').innerHTML = input * sugar;	
	document.getElementById('vanilla').innerHTML = input * vanilla;	
	document.getElementById('honey').innerHTML = input * honey;	
}

// Function to increase measurements when the user opts to increase the serving size of the baklava recipe.
function increaseTirsmisu()
{
	// Get the serving size value in text field.
	input = document.getElementById('servings').value;
	
	// Multiply new serving size by each ingredient's amount.
	// Change serving size to new value.
	document.getElementById('phyllo').innerHTML = input * phyllo;
	document.getElementById('nuts').innerHTML = input * nuts;	
	document.getElementById('butter').innerHTML = input * butter;	
	document.getElementById('cinnamon').innerHTML = input * cinnamon;	
	document.getElementById('water').innerHTML = input * water;	
	document.getElementById('sugar').innerHTML = input * sugar;	
	document.getElementById('vanilla').innerHTML = input * vanilla;	
	document.getElementById('honey').innerHTML = input * honey;	
}