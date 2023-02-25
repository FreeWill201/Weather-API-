const apiKey = "486ecdc5def7c7b806c18a36a4bd823b";
console.log("script.js");
const api_url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=74.0060&appid=486ecdc5def7c7b806c18a36a4bd823b";

var WeatherAPI1 = function () {
  console.log("WeatherAPI");
  fetch(api_url)
    .then(function (response) {
      console.log(".then");
      if (response.ok) {
        console.log("if");
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            //  var inputcity = input.city.name;
            var inputdt_txt = input.list[0].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = input.list[0].main.temp;
            var inputhumidity = input.list[0].main.humidity;
            var inputspeed = input.list[0].wind.speed;
            // HTML integrated Elements
            // var WCity = document.getElementById("WCity");
            var WDate = document.getElementById("WDate");
            // var WIcon = document.getElementById("WIcon");
            var WTemp = document.getElementById("WTemp");
            var WHum = document.getElementById("WHum");
            var WSpeed = document.getElementById("WSpeed");
            // Logging Data, this is where concole.log's should work
            //  WCity.textContent = inputcity;
            WDate.textContent = inputdt_txt.substring(0, 10);
            //  WIcon.textContent = inputicon;
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
          }
          // console.log("City Name: " + inputcity);
          console.log("Date: " + inputdt_txt);
          // console.log("Icon :" + inputicon);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI1();

var WeatherAPI2 = function () {
  console.log("WeatherAPI");
  fetch(api_url)
    .then(function (response) {
      console.log(".then");
      if (response.ok) {
        console.log("if");
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            var inputdt_txt = input.list[1].dt_txt;
            var inputtemp = input.list[1].main.temp;
            var inputhumidity = input.list[1].main.humidity;
            var inputspeed = input.list[1].wind.speed;
            // HTML integrated Elements
            var WDate = document.getElementById("WDate2");
            var WTemp = document.getElementById("WTemp2");
            var WHum = document.getElementById("WHum2");
            var WSpeed = document.getElementById("WSpeed2");
            // Logging Data, this is where concole.log's should work
            WDate.textContent = inputdt_txt.substring(0, 10);
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
          }
          console.log("Date: " + inputdt_txt);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI2();

var WeatherAPI3 = function () {
  console.log("WeatherAPI");
  fetch(api_url)
    .then(function (response) {
      console.log(".then");
      if (response.ok) {
        console.log("if");
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            //  var inputcity = input.city.name;
            var inputdt_txt = input.list[2].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = input.list[2].main.temp;
            var inputhumidity = input.list[2].main.humidity;
            var inputspeed = input.list[2].wind.speed;
            // HTML integrated Elements
            // var WCity = document.getElementById("WCity");
            var WDate = document.getElementById("WDate3");
            // var WIcon = document.getElementById("WIcon");
            var WTemp = document.getElementById("WTemp3");
            var WHum = document.getElementById("WHum3");
            var WSpeed = document.getElementById("WSpeed3");
            // Logging Data, this is where concole.log's should work
            //  WCity.textContent = inputcity;
            WDate.textContent = inputdt_txt.substring(0, 10);
            //  WIcon.textContent = inputicon;
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
          }
          // console.log("City Name: " + inputcity);
          console.log("Date: " + inputdt_txt);
          // console.log("Icon :" + inputicon);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI3();

var WeatherAPI4 = function () {
  console.log("WeatherAPI");
  fetch(api_url)
    .then(function (response) {
      console.log(".then");
      if (response.ok) {
        console.log("if");
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            //  var inputcity = input.city.name;
            var inputdt_txt = input.list[3].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = input.list[3].main.temp;
            var inputhumidity = input.list[3].main.humidity;
            var inputspeed = input.list[3].wind.speed;
            // HTML integrated Elements
            // var WCity = document.getElementById("WCity");
            var WDate = document.getElementById("WDate4");
            // var WIcon = document.getElementById("WIcon");
            var WTemp = document.getElementById("WTemp4");
            var WHum = document.getElementById("WHum4");
            var WSpeed = document.getElementById("WSpeed4");
            // Logging Data, this is where concole.log's should work
            //  WCity.textContent = inputcity;
            WDate.textContent = inputdt_txt.substring(0, 10);
            //  WIcon.textContent = inputicon;
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
          }
          // console.log("City Name: " + inputcity);
          console.log("Date: " + inputdt_txt);
          // console.log("Icon :" + inputicon);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI4();

var CityCall = function () {
  console.log("WeatherAPI");
  fetch(api_url)
    .then(function (response) {
      console.log(".then");
      if (response.ok) {
        console.log("if");
        response.json().then(function (data) {
          console.log(data);
          // Please finish this function below
          {
            // Do something with the data
            var input = data;
            var inputcity = input.city.name;
            // HTML integrated Elements

            // Logging Data, this is where concole.log's should work
          }

          console.log("City Name: " + inputcity);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

CityCall();
