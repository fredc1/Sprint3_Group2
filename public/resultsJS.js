$("div").removeClass("hidden");
$("label").removeClass("hidden");
$("[type=checkbox]").removeClass("hidden");
$("[type=text]").removeClass("hidden");


var json;
for(var i=0; i<localStorage.length; i++){
	var key=localStorage.key(i);
	json=JSON.parse(localStorage.getItem(key));

}
console.log(json);

var body=document.querySelectorAll("input");
for(var i = 0; i < body.length; i++){
		for(var j=0; j<json["answers"].length; j++){
			if(json["answers"][j].id==body[i].id){
				if(json["answers"][j].value=="false" || json["answers"][j].value=="" ){
					if(body[i].type=="checkbox"){
						body[i].checked = false;
					}else if(body[i].type=="radio"){
						body[i].checked = false;
					}
				}
				else{
					if(body[i].type=="checkbox"){
						body[i].checked = true;
					}else if(body[i].type=="radio"){
						body[i].checked = true;
					}
					else if(body[i].type=="text"){
						body[i].value=json['answers'][j].value;
					}

				}
			}
		}
	}
				












