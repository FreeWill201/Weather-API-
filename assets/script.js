const apiKey = "486ecdc5def7c7b806c18a36a4bd823b";

// Each WeatherAPI references a different data point in the OpenWeather Array to receieve back forecast appropriate data

var WeatherAPI5 = function (lat, lon) {
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b&units=imperial";
  fetch(api_url)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            //  var inputcity = input.city.name;
            var inputdt_txt = input.list[6].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = Math.floor(input.list[6].main.temp);
            var inputhumidity = input.list[6].main.humidity;
            var inputspeed = Math.floor(input.list[6].wind.speed);
            var inputicon = input.list[6].weather[0].icon;
            // HTML integrated Elements
            // var WCity = document.getElementById("WCity");
            var WDate = document.getElementById("WDate5");
            // var WIcon = document.getElementById("WIcon");
            var WTemp = document.getElementById("WTemp5");
            var WHum = document.getElementById("WHum5");
            var WSpeed = document.getElementById("WSpeed5");
            var WIcon = document.getElementById("WIcon5");
            // Logging Data, this is where concole.log's should work
            //  WCity.textContent = inputcity;
            WDate.textContent = inputdt_txt.substring(0, 10);
            //  WIcon.textContent = inputicon;
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
            WIcon.setAttribute(
              "src",
              "https://openweathermap.org/img/w/" + inputicon + ".png"
            );
          }
          // console.log("City Name: " + inputcity);
          console.log("Date: " + inputdt_txt);
          // console.log("Icon :" + inputicon);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
          console.log("Icon NUMBER 5 :" + inputicon);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI5();

var WeatherAPI1 = function (lat, lon) {
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b&units=imperial";
  fetch(api_url)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            //  var inputcity = input.city.name;
            var inputdt_txt = input.list[14].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = Math.floor(input.list[14].main.temp);
            var inputhumidity = input.list[14].main.humidity;
            var inputspeed = Math.floor(input.list[14].wind.speed);
            var inputicon = input.list[14].weather[0].icon;
            // HTML integrated Elements
            // var WCity = document.getElementById("WCity");
            var WDate = document.getElementById("WDate");
            // var WIcon = document.getElementById("WIcon");
            var WTemp = document.getElementById("WTemp");
            var WHum = document.getElementById("WHum");
            var WSpeed = document.getElementById("WSpeed");
            var WIcon = document.getElementById("WIcon");
            // Logging Data, this is where concole.log's should work
            //  WCity.textContent = inputcity;
            WDate.textContent = inputdt_txt.substring(0, 10);
            //  WIcon.textContent = inputicon;
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
            WIcon.setAttribute(
              "src",
              "https://openweathermap.org/img/w/" + inputicon + ".png"
            );
          }
          // console.log("City Name: " + inputcity);
          console.log("Date: " + inputdt_txt);
          // console.log("Icon :" + inputicon);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
          console.log("Icon :" + inputicon);
          var input = data;
          var inputname = input.city.name;
          var WCity = document.getElementById("NameCity");
          WCity.textContent = inputname;
          console.log("City Name: " + inputname);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI1();

var WeatherAPI2 = function (lat, lon) {
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b&units=imperial";
  fetch(api_url)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            var inputdt_txt = input.list[22].dt_txt;
            var inputtemp = Math.floor(input.list[22].main.temp);
            var inputhumidity = input.list[22].main.humidity;
            var inputspeed = Math.floor(input.list[22].wind.speed);
            var inputicon = input.list[22].weather[0].icon;
            // HTML integrated Elements
            var WDate = document.getElementById("WDate2");
            var WTemp = document.getElementById("WTemp2");
            var WHum = document.getElementById("WHum2");
            var WSpeed = document.getElementById("WSpeed2");
            var WIcon = document.getElementById("WIcon2");
            // Logging Data, this is where concole.log's should work
            WDate.textContent = inputdt_txt.substring(0, 10);
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
            WIcon.setAttribute(
              "src",
              "https://openweathermap.org/img/w/" + inputicon + ".png"
            );
          }
          console.log("Date: " + inputdt_txt);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
          console.log("Icon :" + inputicon);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI2();

var WeatherAPI3 = function (lat, lon) {
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b&units=imperial";
  fetch(api_url)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            //  var inputcity = input.city.name;
            var inputdt_txt = input.list[30].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = Math.floor(input.list[30].main.temp);
            var inputhumidity = input.list[30].main.humidity;
            var inputspeed = Math.floor(input.list[30].wind.speed);
            var inputicon = input.list[30].weather[0].icon;
            // HTML integrated Elements
            // var WCity = document.getElementById("WCity");
            var WDate = document.getElementById("WDate3");
            // var WIcon = document.getElementById("WIcon");
            var WTemp = document.getElementById("WTemp3");
            var WHum = document.getElementById("WHum3");
            var WSpeed = document.getElementById("WSpeed3");
            var WIcon = document.getElementById("WIcon3");
            // Logging Data, this is where concole.log's should work
            //  WCity.textContent = inputcity;
            WDate.textContent = inputdt_txt.substring(0, 10);
            //  WIcon.textContent = inputicon;
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
            WIcon.setAttribute(
              "src",
              "https://openweathermap.org/img/w/" + inputicon + ".png"
            );
          }
          // console.log("City Name: " + inputcity);
          console.log("Date: " + inputdt_txt);
          // console.log("Icon :" + inputicon);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
          console.log("Icon :" + inputicon);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI3();

var WeatherAPI4 = function (lat, lon) {
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b&units=imperial";
  fetch(api_url)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          {
            // Do something with the data
            var input = data;
            //  var inputcity = input.city.name;
            var inputdt_txt = input.list[38].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = Math.floor(input.list[38].main.temp);
            var inputhumidity = input.list[38].main.humidity;
            var inputspeed = Math.floor(input.list[38].wind.speed);
            var inputicon = input.list[38].weather[0].icon;
            // HTML integrated Elements
            // var WCity = document.getElementById("WCity");
            var WDate = document.getElementById("WDate4");
            // var WIcon = document.getElementById("WIcon");
            var WTemp = document.getElementById("WTemp4");
            var WHum = document.getElementById("WHum4");
            var WSpeed = document.getElementById("WSpeed4");
            var WIcon = document.getElementById("WIcon4");
            // Logging Data, this is where concole.log's should work
            //  WCity.textContent = inputcity;
            WDate.textContent = inputdt_txt.substring(0, 10);
            //  WIcon.textContent = inputicon;
            WTemp.textContent = inputtemp;
            WHum.textContent = inputhumidity;
            WSpeed.textContent = inputspeed;
            WIcon.setAttribute(
              "src",
              "https://openweathermap.org/img/w/" + inputicon + ".png"
            );
          }
          // console.log("City Name: " + inputcity);
          console.log("Date: " + inputdt_txt);
          // console.log("Icon :" + inputicon);
          console.log("Temp: " + inputtemp);
          console.log("Hum: " + inputhumidity);
          console.log("WindSpeed: " + inputspeed);
          console.log("Icon :" + inputicon);
        });
      }
    })
    .catch(function (error) {
      console.log("Error fetching data from API:", error);
    });
};

WeatherAPI4();

// The below function makes it possible to integrate a specified city search and return the weather data points from the WeatherAPI functions as they are integrated in the below function

var APICityCallUrl = function () {
  const CityName = document.getElementById("CityName").value;
  const CityUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    CityName +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(CityUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data[0]);
        WeatherAPI4(data[0].lat, data[0].lon);
        WeatherAPI3(data[0].lat, data[0].lon);
        WeatherAPI2(data[0].lat, data[0].lon);
        WeatherAPI1(data[0].lat, data[0].lon);
        WeatherAPI5(data[0].lat, data[0].lon);

        // Local Storage, displays last city selected

        // Retrieve the last and second to last cities from local storage
        const lastCity = localStorage.getItem("lastCity");
        const secondLastCity = localStorage.getItem("secondLastCity");

        // Store the current city as the last city and update the second to last city
        localStorage.setItem("lastCity", CityName); // Replace 'Chicago' with the current city
        if (!secondLastCity) {
          // If the second to last city is not stored, set it to a default value
          localStorage.setItem("secondLastCity", lastCity); // Replace 'New York' with your default value
        } else {
          // If the second to last city is already stored, update it to the previous last city
          localStorage.setItem("secondLastCity", lastCity);
        }

        // Update the display to show the second to last city
        const cityHeading = document.getElementById("city-heading");
        cityHeading.textContent = lastCity;
        cityHeading.addEventListener("click", function (event) {
          event.preventDefault();
          WeatherAPI4(data[0].lat, data[0].lon);
          WeatherAPI3(data[0].lat, data[0].lon);
          WeatherAPI2(data[0].lat, data[0].lon);
          WeatherAPI1(data[0].lat, data[0].lon);
          WeatherAPI5(data[0].lat, data[0].lon);
        });

        // End of Local Storage
      });
    }
  });
};
