var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
}
function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}
function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
    	//console.log(resp);
    	console.log(item.translations.de);
        //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
        $('<li>').text(item.name).appendTo(countriesList).addClass('country');
        $('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
        $('<li>').text('Area: ' + item.area + ' sq. km').appendTo(countriesList);
        $('<li>').text('Population: ' + item.population).appendTo(countriesList);
        $('<li>').text('Languages: ' + item.languages).appendTo(countriesList);
        $('<li>').text('Currencies: ' + item.currencies).appendTo(countriesList);
    });
}