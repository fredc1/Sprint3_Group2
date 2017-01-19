var inputAll = document.querySelectorAll("input");
var jsonDisplay = JSON.parse(localStorage.getItem("symptoms"));
var body = document.getElementById("body");


for( i = 0; i < jsonDisplay.form.length; i++){//CHECKS HOW MANY FORMS HAVE BEEN SUBMITTED
	var table = document.createElement("TABLE");
	body.appendChild(table);
	//APPEND TABLE TO DIV "BODY"
	var tableRow = document.createElement("TR");
	var timeMillis = parseInt(jsonDisplay.form[i].timestamp);

	var d = new Date(timeMillis);
	var n = d.toDateString();

	tableRow.innerHTML = n;
	table.appendChild(tableRow);
	//DISPLAY TIME STAMP OF FORM
		for(j = 0; j < jsonDisplay.form[i].responses.length; j++){//GOES THROUGH LENGTH OF RESPONSES
			if(jsonDisplay.form[i].responses[j].value != "0"){
			var tableRow = document.createElement("TR");
			tableRow.innerHTML = jsonDisplay.form[i].responses[j].symptom;
			var tableCol = document.createElement("TD");
			tableCol.innerHTML = jsonDisplay.form[i].responses[j].value;
			tableRow.appendChild(tableCol);
			table.appendChild(tableRow);
			}
		}
	//DISPLAY SYMPTOM NAME AND SYMPTOM VALUE
	var lineBreak = document.createElement("BR");
	body.appendChild(lineBreak);
	//APPEND LINE BREAK BETWEEN TABLES
}