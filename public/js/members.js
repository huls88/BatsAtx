
// $(document).ready(function() {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $("#mainHeaderText").text(data.email);
//   });
// });


//Functions creat item cards from the database
// productId, productName, productPrice, productUrl, productDescription

function itemInformation(productId, productName, productPrice, productUrl, productDescription) {
  return $("<button>").attr({
    "data-item-id": productId,
    "data-item-name": productName,
    "data-item-price": productPrice,
    "data-item-custom2-name": "Size",
    "data-item-custom2-options" : "Small|Medium|Large | Xl",
    "data-item-url": productUrl,
    "data-item-description": "Item Description: " + productDescription
  }).html("Buy").addClass("snipcart-add-item");

}

function createProductCard(productPrice, productName, productDescription) {
  return $("<div>").addClass("card-content").append($("<h6>").html(productName),$("<p>").html("Price: " + productPrice),$("<p>").html("Description: " + productDescription));
}

function renderCard (productId, productName, productPrice, productUrl, productDescription){
  return $("<div>").addClass("col s6 m3").append($("<div>").addClass("card medium z-depth-5 hoverable shopItems").append(
    $("<div>").addClass("card-image").append(
      $("<img>").addClass("shopImage materialboxed").attr("src", productUrl)
    ),
    createProductCard("$"+ productPrice, productName, productDescription, productUrl),
    $("<div>").addClass("card-action").append(itemInformation(productId, productName, productPrice, productUrl, productDescription))
  ));
}

$("#target").append(renderCard('1','Bat ATX Logo Shirt', '24.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/f18/f183380cdb508d64068063a3d2434704_preview.png', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('2','Love Bats Shirt', '24.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/d89/d8949b51a42e63c87e93c1b99d394da7_preview.png', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('3','Guano Shirt', '24.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/2bb/2bbb2c4f36d74d860c0d9a625905b8f2_preview.png', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('4','Skyline Shirt', '24.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/3c4/3c4bf120f0983df15b1570b313800425_preview.png', 'its a shirt, buy it you dummy'));

//ajax call to the database to pull iteminformation

// $.ajax({url: '/members', method: 'get'}).done(function(data) {
//   data.map(function(eachOne) {
//     var productId = eachOne.Id;
//     var productName = eachOne.Name;
//     var productPrice = eachOne.Price;
//     var productUrl = eachOne.Url;
//     var productDescription = eachOne.Description;
//     $("#target").prepend(renderCard(productId, productName, productPrice, productUrl, productDescription));




// $(document).ready(function() {
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });
// var temp2;
// var fah;
// var cloudy;
// var windSpeed;
// var sunsetTime;
// var visibility;
var key = 'cdaff73a26ba20e03fbd4c2f9f18e75e';
var url = 'https://api.darksky.net/forecast/' + key + '/';
var cb = '/?callback=?';

function getLocation() {
  navigator.geolocation.getCurrentPosition(function(data) {
    getWeather(data.coords.latitude, data.coords.longitude);

  });

}

// $(document).ready(function() {
//   var dateString = moment.unix(value).format("MM/DD/YYYY");
// });



function getWeather(lat, long) {
  $.getJSON(url + lat + ',' + long + cb)
  .then(function(data) {
// moment().format('MMMM Do YYYY, h:mm:ss a');
    $(".arriveEarly").html("Arive By: " + moment.unix(data.daily.data[0].sunsetTime).subtract(45, 'minutes').format("h:mm a"));

    $("#todayInfo").html("Current Temperature: " + data.currently.temperature.toFixed());
    $("#todayInfo2").html("The Sun Sets at: " + moment.unix(data.daily.data[0].sunsetTime).format("h:mm a"));
    $("#todayInfo3").html("Current Wind Speeds: " + data.currently.windSpeed.toFixed()+ "mph");
    $("#todayInfo4").html("Visibility: " + data.daily.data[0].visibility.toFixed()+ "mi");
    $("#todayInfo5").html("Summary: " + data.daily.data[0].summary);


    $("#tomorrowInfo").html("Max Temperature: " + data.daily.data[1].temperatureMax.toFixed());
    $("#tomorrowInfo2").html("The Sun Sets at: " + moment.unix(data.daily.data[1].sunsetTime).format("h:mm a"));
    $("#tomorrowInfo3").html("Wind Speeds expected to reach: " + data.daily.data[1].windSpeed.toFixed() + "mph");
    $("#tomorrowInfo4").html("Visibility: " + data.daily.data[1].visibility.toFixed()+ "mi");
    $("#tomorrowInfo5").html("Summary: " + data.daily.data[2].summary);


    $("#twoDayInfo").html("Max Temperature: " + data.daily.data[2].temperatureMax.toFixed());
    $("#twoDayInfo2").html("The Sun Sets at: " + moment.unix(data.daily.data[2].sunsetTime).format("h:mm a"));
    $("#twoDayInfo3").html("Wind Speeds expected to reach: " + data.daily.data[2].windSpeed.toFixed() + "mph");
    $("#twoDayInfo4").html("Visibility: " + data.daily.data[2].visibility.toFixed()+ "mi");
    $("#twoDayInfo5").html("Summary: " + data.daily.data[2].summary);

    console.log(data);

  });
}
getLocation();

$(document).ready(function(){
  $('.materialboxed').materialbox();
});


//SNIPCART JS
//callback for order copletion that we can pass to a database
// Snipcart.subscribe('order.completed', function (data) {
//     console.log(data);
// });
