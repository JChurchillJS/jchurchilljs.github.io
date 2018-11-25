/*
      CIS166AA: Security Functions
      Author: Jessica Churchill
      Date: 11/17/2018
*/

"use strict";

// Variables to replace "Click Here" with relevant information
var platformEx = document.getElementById('platform'), appNameEx = document.getElementById('appName'), agentEx = document.getElementById('userAgent'), heightEx = document.getElementById('height'),
    availWidthEx = document.getElementById('availWidth'), pixelEx = document.getElementById('pixelDepth');



function getLocation(location)
{
      // Get user's current coordinates
      var userLat = location.coords.latitude, userLong = location.coords.longitude, userAlt = location.coords.altitude;
      // Display coordinates
      document.getElementById('coords').innerHTML = "<b>Latitude:</b> " + userLat + "<br /><b>Longitude:</b> " + userLong + "<br /><b>Altitude:</b> " + userAlt;

      // Object holds user's latitude and longitude
      var userPos = {lat: userLat, lng: userLong};
      // Create map's parameters
      var params = {center: new google.maps.LatLng(userPos), zoom: 15, enableHighAccuracy: true};
      // Create google map showing user's current location
      var userMap = new google.maps.Map(document.getElementById('map'), params);
      // Create a marker to pinpoint user's location
      var marker = new google.maps.Marker({position: userPos, map: userMap});
}



// Event listeners

// Major browsers
if (navigator.geolocation)
{
      navigator.geolocation.getCurrentPosition(getLocation, fail, {timeout: 10000})
}
// If not supported
else
{
      document.getElementById('map').innerHTML = "Geolocation isn't supported.";
}

function fail()
{
      document.getElementById('map').innerHTML = "Location permission was denied.";
}

// For major browsers
if (window.addEventListener)
{
      // Replace text with name of the user's web browser on click
      appNameEx.addEventListener("click", function(){appNameEx.textContent = navigator.appName;});
      // Replace text with user's operating system
      platformEx.addEventListener("click", function(){platformEx.textContent = navigator.platform;});
      // Replace text with user's browser info, platform name, and compatibility
      agentEx.addEventListener("click", function(){agentEx.textContent = navigator.userAgent;});
      // Replace text with user's screen height
      heightEx.addEventListener("click", function(){heightEx.textContent = screen.height + " px";});
      // Replace text with user's screen width, not including OS features
      availWidthEx.addEventListener("click", function(){availWidth.textContent = screen.availWidth + " px";});
      // Replace text with user's screen color resolution
      pixelEx.addEventListener("click", function(){pixelEx.textContent = screen.pixelDepth + " bpp";});
}
// Compatibe with IE8 or previous versions
else
{
      appNameEx.attachEvent("onclick", function(){appNameEx.textContent = navigator.appName;});
      platformEx.attachEvent("onclick", function(){platformEx.textContent = navigator.platform;});
      agentEx.attachEvent("onclick", function(){agentEx.textContent = navigator.userAgent;});
      heightEx.attachEvent("onclick", function(){heightEx.textContent = screen.height + " px";});
      availWidthEx.attachEvent("onclick", function(){availWidth.textContent = screen.availWidth + " px";});
      pixelEx.attachEvent("onclick", function(){pixelEx.textContent = screen.pixelDepth + " bpp";});
}
