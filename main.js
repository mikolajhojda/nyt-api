var search = '';
$('#click').click(function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    search = $('#search').val();
    console.log(search);
    url += '?' + $.param({
        'api-key': "babd832cd77b436e94a6bee473f94226",
        'q': search
    })
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        $(".row").each(function(index, element) {
            $(element).html("<div class='col s12 m6'><div class='card black'><div class='card-content white-text'><span class='card-title'>Card Title</span><p class='snippet'></p></div><div class='card-action'><a class='white-text link' href='#'>Read more</a></div></div></div><div class='col s12 m6'><div class='card black'><div class='card-content white-text'><span class='card-title'>Card Title</span><p class='snippet'></p></div><div class='card-action'><a class='white-text link' href='#'>Read more</a></div></div></div>");
        });

        $(".card-title").each(function(index, element) {
            $(element).text(result.response.docs[index].headline.main);
        });
        $(".snippet").each(function(index, element) {
            $(element).text(result.response.docs[index].snippet);
        });
        $(".link").each(function(index, element) {
            $(element).attr('href', result.response.docs[index].web_url);
        });
    }).fail(function(err) {
        throw err;
    });
})