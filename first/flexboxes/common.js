$(document).ready(function() {

	$.getJSON('inf.json', function(object) {
		$('#title').text(object.title);
		$('title').text(object.title);
		$('#description').text(object.description);
        showCats(object.cats);


    });
	
});

function showCats(cats){
	for (cat of cats)
	{
		var string = '';
		string+='<div class="flex-cat"><span style="background-color: ' + cat.color + ' ;">^_^</span> - this is <strong>' + cat.name + '</strong>.<br/> It is ' + cat.color + ' color and it is ' + cat.old + ' years old. </div>';
		$('#catlist').append(string);
	} 
        
};