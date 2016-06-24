
var apiKey = 'zH1WFwEgI3ZlJ5OYQMAqHRlt1UsyUMfv';
var userID = 'colbyj';



$(function() {
    var perPage = 12;
    var behanceProjectAPI = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key=' + apiKey + '&per_page=' + perPage;
 
    function setPortfolioTemplate() {
        var projectData = JSON.parse(sessionStorage.getItem('behanceProject')),
            getTemplate = $('#portfolio-template').html(),
            c = console.log(getTemplate), 
            template    = Handlebars.compile(getTemplate),
            result      = template(projectData);
        $('#works-container').html(result);
    };
 
    if(sessionStorage.getItem('behanceProject')) {
        setPortfolioTemplate();
    } else {
        $.getJSON(behanceProjectAPI, function(project) {
            var data = JSON.stringify(project);
            sessionStorage.setItem('behanceProject', data);
            setPortfolioTemplate();
        });
    };
});
