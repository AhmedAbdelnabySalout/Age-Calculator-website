var date = new Date();

var month_select = document.getElementById("month_select_ID");
var day_select = document.getElementById("day_select_ID");
var year_select = document.getElementById("year_select_ID");


var months = ["January", "Febuary", "March", "April", "May", "June",
			  "July", "Augus", "September", "October", "November", "December"];

var birth_day = 1;
var birth_month = 1;
var birth_year = 1900;


for (var i = 0; i < months.length; i ++) {
	var month_element = document.createElement("option");
	month_element.textContent = months[i];
	month_element.value = i;
	month_select.appendChild(month_element);
}
for (var i = 1; i <= 31; i ++) {
	var day_element = document.createElement("option");
	day_element.textContent = i;
	day_element.value = i;
	day_select.appendChild(day_element);
}
for (var i = 1900; i <= date.getFullYear(); i ++) {
	var year_element = document.createElement("option");
	year_element.textContent = i;
	year_element.value = i;
	year_select.appendChild(year_element);
}

function monthOnchangeEvent() {
	birth_month = month_select.value;
}
function dayOnchangeEvent() {
	birth_day = day_select.value;
}
function yearOnchangeEvent() {
	birth_year = year_select.value;
}

function findAge(current_date, current_month, current_year, 
            birth_date, birth_month, birth_year)
{
    // days of every month
    var month = [31, 28, 31, 30, 31, 30,
                    31, 31, 30, 31, 30, 31];
  
    // if birth date is greater than current date
    // then do not count this month and add 30
    // to the date so as to subtract the date and
    // get the remaining days
    if (birth_date > current_date) {
        current_date
            = current_date + month[birth_month - 1];
        current_month = current_month - 1;
    }
  
    // if birth month exceeds current month, then do
    // not count this year and add 12 to the month so
    // that we can subtract and find out the difference
    if (birth_month > current_month) {
        current_year = current_year - 1;
        current_month = current_month + 12;
    }
  
    // calculate date, month, year
    var calculated_date = current_date - birth_date;
    var calculated_month = current_month - birth_month;
    var calculated_year = current_year - birth_year;
    
    result_p = document.getElementById("result");
	result_p.innerHTML = "Your age is:<hr style='border: 2px solid #0f647c; border-radius: 5px;'/>Year(s): " + calculated_year + "<br/>Month(s): " + calculated_month + "<br/>Day(s): " + calculated_date;
}

function calc() {
	document.getElementById("resultFrame").style.display = 'block';
	findAge(date.getDay(), date.getMonth()+1, date.getFullYear(),
		birth_day, birth_month, birth_year);
}
