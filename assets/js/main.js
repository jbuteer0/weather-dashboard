
var APIKey = "aff0a6f3587425c11ae80fd87a140741"
function getWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var div = $('<div>').addClass('card mt-2')
        var title = $('<h2>').text(response.name +" (" + new Date().toLocaleDateString() + ")")
        var image = $('<img>').attr('src','http://openweathermap.org/img/wn/'+response.weather[0].icon+'.png')
        var temp =$('<div>').text('Tempature: '+response.main.temp)
        var humidity =$('<div>').text('Humidity: '+response.main.humidity)
        var wind = $('<div>').text('Wind Speed: '+ response.wind.speed)
        title.append(image)
        div.append(title, temp, humidity,wind)
        $('.city').append(div)
    })
}

$('.btn').click(event=>{
    event.preventDefault()
    var theCity=$('#search').val()
    getWeather(theCity)
})