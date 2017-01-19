$("[type=checkbox]").change(function(){
	if($(this).prop("checked")){
		var className = $(this).attr('id');
		console.log(className);
		$("."+className).removeClass("hidden");
	}
	else{
		var className = $(this).attr('id');
		$("."+className).addClass("hidden");
	}


});

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('submit').addEventListener('click', saveItems);
});

var saveItems= function(){
	var saveJson="";
	var body = document.querySelectorAll("input");

	saveJson+='{';
	saveJson+='"title": ';
	saveJson+='"';
	saveJson+='SACT';
	saveJson+='",';
	saveJson+='"answers": [';
	for(var i=0; i<body.length; i++){
		if(body[i].type=="checkbox"){
			saveJson+='{"id": "';
			saveJson+=body[i].id;
			saveJson+='",'
			saveJson+='"value": "';
			saveJson+=body[i].checked;
			saveJson+='"';
			if(i+1==body.length){
				saveJson+='}';
			}
			else{
				saveJson+='},';
			}
		}
		else if(body[i].type=="text"){
			saveJson+='{"id": "';
			saveJson+=body[i].id;
			saveJson+='",'
			saveJson+='"value": "';
			saveJson+=body[i].value;
			saveJson+='"';
			if(i+1==body.length){
				saveJson+='}';
			}
			else{
				saveJson+='},';
			}
		}


	}


	saveJson+=']';
	saveJson+='}';
	localStorage.setItem(Object.keys(localStorage).length, saveJson);
}




