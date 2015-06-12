
$(function() {
    $('#search-term').submit(function(event) {
        event.preventDefault();
         var searchTerm = $('#query').val();
       getRequest(searchTerm);
       console.log(searchTerm);
    });
});

function getRequest(searchTerm){
	var params = {
	part: 'snippet',
	key: 'AIzaSyA8f5SfIBo7Lnn6Z-ouW3kw-BbXn6Z6EPc',
		q: searchTerm,
		r: 'json'
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data.items[0].snippet.thumbnails);
        console.log(data.items[0].snippet.thumbnails);
	});
}

function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
        html += '<li>' + '<a href="' + value.url + '">' + value.url + '</a>' + '</li>';
        console.log(value.url);
    });
    $('#search-results').html(html);
}
