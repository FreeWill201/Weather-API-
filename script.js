const apiKey = "486ecdc5def7c7b806c18a36a4bd823b";

const api_url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=74.0060&appid=486ecdc5def7c7b806c18a36a4bd823b";

var WeatherAPI1 = function (lat, lon) {
  console.log("WeatherAPI");
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b";
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

var WeatherAPI2 = function (lat, lon) {
  console.log("WeatherAPI");
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b";
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
            var inputdt_txt = input.list[11].dt_txt;
            var inputtemp = input.list[11].main.temp;
            var inputhumidity = input.list[11].main.humidity;
            var inputspeed = input.list[11].wind.speed;
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

var WeatherAPI3 = function (lat, lon) {
  console.log("WeatherAPI");
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b";
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
            var inputdt_txt = input.list[19].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = input.list[19].main.temp;
            var inputhumidity = input.list[19].main.humidity;
            var inputspeed = input.list[19].wind.speed;
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

var WeatherAPI4 = function (lat, lon) {
  console.log("WeatherAPI");
  const api_url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=486ecdc5def7c7b806c18a36a4bd823b";
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
            var inputdt_txt = input.list[27].dt_txt;
            // var inputicon = input.list[0].weather.icon;
            var inputtemp = input.list[27].main.temp;
            var inputhumidity = input.list[27].main.humidity;
            var inputspeed = input.list[27].wind.speed;
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

// var CityCall = function () {
// console.log("WeatherAPI");
// fetch(api_url)
//  .then(function (response) {
//  console.log(".then");
// if (response.ok) {
// console.log("if");
// response.json().then(function (data) {
//  console.log(data);
// Please finish this function below
//  {
// Do something with the data
// var input = data;
// var inputcity = input.city.name;
// HTML integrated Elements

// Logging Data, this is where concole.log's should work
//  }

//   console.log("City Name: " + inputcity);
//  });
//  }
// })
// .catch(function (error) {
//   console.log("Error fetching data from API:", error);
//  });
// };

var APICityCallUrl = function () {
  const CityName = document.getElementById("CityName").value;
  const CityUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    CityName +
    "&appid=" +
    apiKey;
  fetch(CityUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data[0]);
        WeatherAPI4(data[0].lat, data[0].lon);
        WeatherAPI3(data[0].lat, data[0].lon);
        WeatherAPI2(data[0].lat, data[0].lon);
        WeatherAPI1(data[0].lat, data[0].lon);

        // Retrieve the last selected city from local storage (if available)
        const lastCity = localStorage.getItem("lastCity");

        // Use the last selected city as the default value for the input field
        document.getElementById("CityName").value = lastCity || "";

        // Display the last selected city
        const lastCityElement = document.getElementById("lastCity");
        lastCityElement.textContent = lastCity || "No city selected";

        // Fetch data for the selected city and update UI
        fetchCityData(lastCity);

        // When the user submits the form, fetch data for the selected city and update UI
        document
          .getElementById("city-form")
          .addEventListener("submit", (event) => {
            event.preventDefault();
            const cityName = document.getElementById("CityName").value;
            fetchCityData(cityName);
          });

        function fetchCityData(cityName) {
          // Fetch city data and update UI
          const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
          fetch(apiUrl)
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Network response was not ok.");
              }
            })
            .then((data) => {
              console.log(data[0]);
              WeatherAPI4(data[0].lat, data[0].lon);
              WeatherAPI3(data[0].lat, data[0].lon);
              WeatherAPI2(data[0].lat, data[0].lon);
              WeatherAPI1(data[0].lat, data[0].lon);

              // Store the selected city in local storage
              localStorage.setItem("lastCity", cityName);

              // Update the last selected city element
              lastCityElement.textContent = cityName;
            })
            .catch((error) => {
              console.error(
                "There was a problem with the fetch operation:",
                error
              );
            });
        }
      });
    }
  });
};

// CityCall();

APICityCallUrl();

// Need to fix site to display current city. Check
// Need to fix site to better display day's 1-4 so there are no repeats. Check
