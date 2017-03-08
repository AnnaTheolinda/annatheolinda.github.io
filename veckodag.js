//Gör en sida som visar ut vilken dag det är idag. 
//Om du vill kan du utveckla den med att också visa vilken månad och vilket år det är.

//Week
var week = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];


function figureOutTodaysDay() {
    var now = new Date();
    var weekdayNumber = now.getDay();
    var dayElement = document.getElementById("day");
    dayElement.textContent = week[weekdayNumber];      
}
figureOutTodaysDay();

//skapa två funktioner, bättre namn på "Today" = figureOutTodaysDay och en med text


//Months

var monthNames = ["Januari", "Februari", "Mars", "April", "Maj", "Juni",
  "Juli", "Augusti", "September", "Oktober", "November", "December"];

function figureOutMonth() {
    var month = new Date();
    var monthNumber = month.getMonth(); 
    var monthElement = document.getElementById("month");
    monthElement.textContent = monthNames[monthNames];
}

figureOutMonth();

//Den här koden funkar...
//var month = new Date();
//document.write(monthNames[month.getMonth()]);