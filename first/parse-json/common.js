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
		string+='<p>' + cat.name + ' is ' + cat.color + ' color and it is ' + cat.old + ' years old. </p>';
		$('#catlist').append(string);
	}
        
};