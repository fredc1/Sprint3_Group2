document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("summary").addEventListener("click", createSummary);
	document.getElementById("clear").addEventListener("click", clearStorage);
});



$(document).ready(function()
 {
    console.log('document ready...');

    $(".answer").each(function(){
    	$(this).children().each(function(){
			if(this.className=="option"){
				$(this).hide();
			}
		});
    });
 });

var createSummary = function() {
	window.location.href = "summary2";
}


var clearStorage=function(){
	localStorage.clear();
}
var revert=function(){
	console.log("revert");
	if (localStorage.getItem('obj')) {
		var arr = JSON.parse(localStorage.getItem('obj'));
		$("input").each(function(){
			var val=arr.indexOf(this.id)+1;
			if(this.type=="checkbox" || this.type=="radio"){
				$(this).attr("checked",arr[val]);
			}
			else{
				$(this).val(arr[val]);

			}
		});
	}
}


$("input,select").on('change', function(){
	localStorage.clear();

	var arr= [];
	$("input,select").each(function(){
		if(this.type=="checkbox" || this.type=="radio"){
			arr.push(this.id);
			arr.push(this.checked);
		}
		else {
		arr.push(this.id);
		arr.push(this.value);
	}
	});

	

	console.log("saved");
    var a = JSON.stringify(arr);
    localStorage.setItem('obj', a);

});

$("[type=range]").each(function(){

$("#"+this.id+"v").text($("#"+this.id).val());  

$("#"+this.id).on('change', function(){
$("[type=range]").each(function(){
    $("#"+this.id+"v").text($("#"+this.id).val());
	});
});

});

$("[type=checkbox]").change(function(){
if($(this).prop("checked")){
	$(this).parent().children().each(function(){
		if(this.className=="option")
			$(this).show();
	});
		
}
else{
	$(this).parent().children().each(function(){
			if(this.className=="option"){
				$(this).hide();
			}
		});

}
});

$("[type=radio]").change(function(){


console.log("radio change");
if(this.id.indexOf(0)==5){
	console.log("yes");
	$(this).parent().children().each(function(){
		if(this.className=="option")
			$(this).show();
	});
}


	else{
		var idd=this.id;
		var nn=this.name;
		$(this).parent().parent().children().find("input:radio").each(function(){
		if(this.name==nn&&this.id!=idd)
			$(this).parent().children().each(function(){
			if(this.className=="option"){
				$(this).hide();
			}
		});
	});

	}
	

});




/*
document.getElementById("viewSavedAnswers").addEventListener("click", function(){
		if(localStorage.getItem(CH_0_0)||!(localStorage.getItem(CH_0_0))){
			for (var i = 0; i < localStorage.length; i++){
				if(localStorage.getItem(localStorage.key(i))==''){document.write(localStorage.key(i)+', null'+"<br>");}
				else {document.write(localStorage.key(i)+', '+localStorage.getItem(localStorage.key(i))+"<br>");}
    		}
}
		if (localStorage.getItem("CH_0_0") === null) {
 document.write("No saved answers to display."+"<br>");
			refresh();
}
		
	});
*/













