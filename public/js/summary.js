
$(document).ready(function()
 {
    console.log('document ready...');
    if (localStorage.getItem('obj')) {
		var arr = JSON.parse(localStorage.getItem('obj'));
		$("input,select").each(function(){
			var val=arr.indexOf(this.id)+1;
			if(this.type=="checkbox" || this.type=="radio"){
				$(this).attr("checked",arr[val]);
			}
			else{
				$(this).val(arr[val]);

			}
		});
	}

    $(".answer").each(function(){
    	$(this).each(function(){
    		if(!($(this).children().find("input").attr("checked")))$(this.hide);
    	});

    });

$("[type=range]").each(function(){

$("#"+this.id+"v").text($("#"+this.id).val());  

$("#"+this.id).on('change', function(){
$("[type=range]").each(function(){
    $("#"+this.id+"v").text($("#"+this.id).val());
    });
});

});

$("input,select").attr('disabled','disabled');


 });


	