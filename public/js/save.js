document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('submit').addEventListener('click', saveitems);
});

var myClasss = "MT_0_0";
$( "."+myClasss ).addClass('hidden');


var saveitems= function(){
	var saveJson="";
	var body = document.querySelectorAll("input");
	saveJson+='{';
	saveJson+='"title": "';
	saveJson+='Menstrual Tracker';
	saveJson+='",';
	saveJson+='"responses": [';
	for(var i = 0; i < body.length; i++){
		//console.log(body[i].type);
		if(body[i].type=="date"){
			saveJson+='{"id": "';
			saveJson+=body[i].id;
			saveJson+='",';
			saveJson+='"value": "';
			saveJson+=body[i].value;
			saveJson+='"';
			if(i+1==body.length)
				saveJson+='}';
			else
				saveJson+='},';
		}else if(body[i].type=="checkbox"){
			saveJson+='{"id": "';
			saveJson+=body[i].id;
			saveJson+='",';
			saveJson+='"value": "';
			//console.log(body[i].checked);
			saveJson+=body[i].checked;
			saveJson+='"';
			if(i+1==body.length)
				saveJson+='}';
			else
				saveJson+='},';
		}else if(body[i].type=="radio"){
			saveJson+='{"id": "';
			saveJson+=body[i].id;
			saveJson+='",';
			saveJson+='"value": "';
			//console.log(body[i].checked);
			saveJson+=body[i].checked;
			saveJson+='"';
			if(i+1==body.length)
				saveJson+='}';
			else
				saveJson+='},';
		}

	}
	saveJson+='	]}';
	localStorage.setItem(Object.keys(localStorage).length,saveJson);
	$("input").attr('disabled','disabled');


//SHOWING ANSWERS

var myClasss = "MT_0_0";
	$( "."+myClasss ).removeClass('hidden');

	var el = document.getElementById("userChoice");
	var localLength = Object.keys(localStorage).length - 1;
	$( "#pageNumb" ).append("<p id=numb>"+ localLength +"</p>");
	var savedJson=JSON.parse(localStorage.getItem(localLength));


	var body = document.querySelectorAll("input");
	for(var i = 0; i < body.length; i++){
		for(var s=0; s<savedJson['responses'].length; s++){
			if(savedJson['responses'][s].id==body[i].id){
				if(savedJson['responses'][s].value == "false"){
					
					if(body[i].type=='checkbox'){
						body[i].checked = false;
					}else if(body[i].type=='radio'){
						body[i].checked = false;
					}

				}else if(savedJson['responses'][s].value == ""){
					
					if(body[i].type=='checkbox'){
						body[i].checked = false;
					}else if(body[i].type=='radio'){
						body[i].checked = false;
					}

				}else{
					if(body[i].type=='date'){
						body[i].value = savedJson['responses'][s].value;
					}else if(body[i].type=='checkbox'){
						body[i].checked = savedJson['responses'][s].value;
					}else if(body[i].type=='radio'){
						body[i].checked = "savedJson['responses'][s].value";
					}
				}
				
			}
		}
	}

$( "#fowardBack" ).append("<h3><button id='foward'>Next Day</button></h3>");

$('#foward').click(
	function(){

	var myClasss = "MT_0_0";
	$( "."+myClasss ).removeClass('hidden');


		//SHOWING ANSWERS
	var el = document.getElementById("userChoice");
	var localLength = $( "#numb" ).text();
	if(Number(localLength) +1<Object.keys(localStorage).length){
		localLength=Number(localLength) +1;
	}
	console.log(localLength);
	$( "#numb" ).text(localLength);
	var savedJson=JSON.parse(localStorage.getItem(localLength));


	var body = document.querySelectorAll("input");
	for(var i = 0; i < body.length; i++){
		for(var s=0; s<savedJson['responses'].length; s++){
			if(savedJson['responses'][s].id==body[i].id){
				if(savedJson['responses'][s].value == "false"){
					if(body[i].type=='checkbox'){
						body[i].checked = false;
					}else if(body[i].type=='radio'){
						body[i].checked = false;
					}

				}else if(savedJson['responses'][s].value == ""){
					
					if(body[i].type=='checkbox'){
						body[i].checked = false;
					}else if(body[i].type=='radio'){
						body[i].checked = false;
					}
				}else{
					if(body[i].type=='date'){
						body[i].value = savedJson['responses'][s].value;
					}else if(body[i].type=='checkbox'){
						body[i].checked = savedJson['responses'][s].value;
					}else if(body[i].type=='radio'){
						body[i].checked = savedJson['responses'][s].value;
					}
				}
				
			}
		}
	}
	}
);

$( "#fowardBack" ).append("<h3><button id='backward'>Previous Day</button></h3>");

$('#backward').click(
	function(){
		//SHOWING ANSWERS

	var myClasss = "MT_0_0";
	$( "."+myClasss ).removeClass('hidden');

	var el = document.getElementById("userChoice");
	var localLength = $( "#numb" ).text();
	if(Number(localLength) -1>=0){
		localLength=Number(localLength) -1;
	}
	console.log(localLength);
	$( "#numb" ).text(localLength);
	var savedJson=JSON.parse(localStorage.getItem(localLength));


	var body = document.querySelectorAll("input");
	for(var i = 0; i < body.length; i++){
		for(var s=0; s<savedJson['responses'].length; s++){
			if(savedJson['responses'][s].id==body[i].id){
				if(savedJson['responses'][s].value == "false"){
					if(body[i].type=='checkbox'){
						body[i].checked = false;
					}else if(body[i].type=='radio'){
						body[i].checked = false;
					}

				}else if(savedJson['responses'][s].value == ""){
					
					if(body[i].type=='checkbox'){
						body[i].checked = false;
					}else if(body[i].type=='radio'){
						body[i].checked = false;
					}
				}else{
					if(body[i].type=='date'){
						body[i].value = savedJson['responses'][s].value;
					}else if(body[i].type=='checkbox'){
						body[i].checked = savedJson['responses'][s].value;
					}else if(body[i].type=='radio'){
						body[i].checked = savedJson['responses'][s].value;
					}
				}
				
			}
		}
	}
	}
);

document.getElementById('submit').remove();
}



$('input[type=radio]').change(
    function(){
        if (this.checked) {
            //console.log('checked');

				var myClass = $(this).attr('id');
				$( "."+myClass ).removeClass('hidden');

        }else{
        	//$(this).removeClass('hidden');
        	var myClass = $(this).attr('id');
			$( "."+myClass ).addClass('hidden');
        }
    }
);



			