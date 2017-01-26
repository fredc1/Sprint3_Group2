
var jsonSymptoms = JSON.parse(localStorage.getItem("symptoms"));




var steps = ["No physical activity: rest until you are not exhibiting symptoms.", "You may participate in light aerobic exercise.", "You may participate in sport specific training. (No Contact)", "You may participate in non-contact drills.", "You may participate in full contact drills.", "You may return to play!"];


$("#docButton").hide();

var waitTime = 86400000;


if(localStorage.getItem("test") == "true"){
	waitTime = 1000;
	console.log("entered");
}
else{
	waitTime = 86400000;
}

if(localStorage.getItem("test") == "false"){

if(!(jsonSymptoms.form.length > localStorage.getItem("form"))){
	$("#completeSym").show();
	$("#currentStep").hide();
	$("#problematicSymptoms").hide();
	$("#nextStep").hide();
	$("#current").hide();
}
else{

	$("#completeSym").hide();
	$("#currentStep").show();
	$("#problematicSymptoms").show();
	$("#nextStep").show();
	$("#current").show();




var currentStep = localStorage.getItem("step");


if(currentStep === '1000'){
	currentStep = 0;
	
}

var add = false;
var addit = false;
var nextStep = 0;
var problematicSymptoms = "";
var symptomCheckResponse = symptomCheck(jsonSymptoms);
console.log("array: " + symptomCheckResponse);




$(document).ready(function(){

	
	nextStep = parseInt(currentStep) + 1;
	

	


if(symptomCheckResponse.length != 0){
		if(symptomCheckResponse[symptomCheckResponse.length-1] === "-1"){
			problematicSymptoms = "24 hours must elapse since you last tracked symptoms before you can re-evaluate your return to play status";
		}
		else{
			problematicSymptoms = "You must wait for these symptoms to return to their baseline value before you can advance: ";
			for (var i = 0; i < symptomCheckResponse.length; i++) {
				problematicSymptoms += symptomCheckResponse[i] + ", ";
			}
			problematicSymptoms = problematicSymptoms.substring(0, problematicSymptoms.length-2);//might need to be -2

			}

	}
	else{
		if(parseInt(currentStep) === 4){
			if(localStorage.getItem("slider")=== "yes"){
				currentStep++;
				localStorage.setItem("slider", "no");
			}
			else{
				problematicSymptoms = "Your doctor must approve you for full return to play before you can advance";
			}
		}
		else{
			if(!(parseInt(currentStep) === 5 || parseInt(currentStep) === 4 )){

				add = true;
				addit = true;
			}
			problematicSymptoms = "You are ready to be advanced to the next step in the return to play protocol";

		}//else
	}

	if (parseInt(currentStep) === 4){
		
		
		$("#docButton").show();

		

	}


	$("#currentStep").html(steps[currentStep]);
	if(!(parseInt(currentStep) === 5)){
		$("#nextStep").html("Once you advance: " + steps[nextStep]);
	}
	else{
		$("#nextStep").html("");
	}

	if(parseInt(currentStep) === 4){
		$("#problematicSymptoms").html("Please consult your doctor and ask if you are ready to return to play. If your doctor approves, click on the slider.");
	}
	else{
		$("#problematicSymptoms").html(problematicSymptoms);
	}




if(add){
	currentStep++;
};


if(!(currentStep > 5)){
	localStorage.setItem("step", currentStep);
}

});// doc ready


$('#docButton').on("click", function() {
		
			localStorage.setItem("slider", "yes");
		

	});
var formLength = jsonSymptoms.form.length;

if(addit){
	formLength + 1;
}

localStorage.setItem("form", formLength);


}//end form length else

}//end test turning off form check!!!!!!!! this is where new copy begins

else{

	$("#completeSym").hide();

	var currentStep = localStorage.getItem("step");


if(currentStep === '1000'){
	currentStep = 0;
	
}

var add = false;
var addit = false;
var nextStep = 0;
var problematicSymptoms = "";
var symptomCheckResponse = symptomCheck(jsonSymptoms);
console.log("array: " + symptomCheckResponse);




$(document).ready(function(){

	
	nextStep = parseInt(currentStep) + 1;
	

	


if(symptomCheckResponse.length != 0){
		if(symptomCheckResponse[symptomCheckResponse.length-1] === "-1"){
			problematicSymptoms = "24 hours must elapse since you last tracked symptoms before you can re-evaluate your return to play status";
		}
		else{
			problematicSymptoms = "You must wait for these symptoms to return to their baseline value before you can advance: ";
			for (var i = 0; i < symptomCheckResponse.length; i++) {
				problematicSymptoms += symptomCheckResponse[i] + ", ";
			}
			problematicSymptoms = problematicSymptoms.substring(0, problematicSymptoms.length-2);//might need to be -2

			}

	}
	else{
		if(parseInt(currentStep) === 4){
			if(localStorage.getItem("slider")=== "yes"){
				currentStep++;
				localStorage.setItem("slider", "no");
			}
			else{
				problematicSymptoms = "Your doctor must approve you for full return to play before you can advance";
			}
		}
		else{
			if(!(parseInt(currentStep) === 5 || parseInt(currentStep) === 4 )){

				add = true;
				addit = true;
			}
			problematicSymptoms = "You are ready to be advanced to the next step in the return to play protocol";

		}//else
	}

	if (parseInt(currentStep) === 4){
		
		
		$("#docButton").show();

		

	}


	$("#currentStep").html(steps[currentStep]);
	if(!(parseInt(currentStep) === 5)){
		$("#nextStep").html("Once you advance: " + steps[nextStep]);
	}
	else{
		$("#nextStep").html("");
	}

	if(parseInt(currentStep) === 4){
		$("#problematicSymptoms").html("Please consult your doctor and ask if you are ready to return to play. If your doctor approves, click on the slider.");
	}
	else{
		$("#problematicSymptoms").html(problematicSymptoms);
	}




if(add){
	currentStep++;
};


if(!(currentStep > 5)){
	localStorage.setItem("step", currentStep);
}

});// doc ready


$('#docButton').on("click", function() {
		
			localStorage.setItem("slider", "yes");
		

	});
var formLength = jsonSymptoms.form.length;

if(addit){
	formLength + 1;
}

localStorage.setItem("form", formLength);


}///end testing else!!!!!!!!!






//returns symptoms[].length = 0 if all symptoms are at baseline
//returns symptoms[numOfSymptoms] if any symptom 
//return symptoms[0] = -1 if not enough time has passed   


function symptomCheck(){
	var symptoms = [];
	var d = new Date();

	if(d.getTime() - jsonSymptoms.form[jsonSymptoms.form.length-1].timestamp < waitTime){
		symptoms.push("-1");
		console.log("post entered");
		return symptoms;
	}//if time check
	for(var i = 0; i < jsonSymptoms.form[jsonSymptoms.form.length-1].responses.length; i++){
		
		if((jsonSymptoms.form[jsonSymptoms.form.length-1].responses[i].value - jsonSymptoms.form[0].responses[i].value > 0)){
			symptoms.push(jsonSymptoms.form[jsonSymptoms.form.length-1].responses[i].symptom);
		}

	}// for iterating through symptoms. 

	return symptoms;

}
