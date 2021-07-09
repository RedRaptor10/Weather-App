function search(query, units) {
    let main = document.getElementById('main');
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const APIKey = '09167145993a980df9291e4c17eda5b5';

    // Remove Error Message if Exists
    let errorMsg = document.getElementById('error-msg');
    if (errorMsg) { errorMsg.remove(); }

    // Display Loading Message
    displayLoading();

    // Fetch Results
    // Promises Method
    fetch(url + '?q=' + query + '&units=' + units + '&appid=' + APIKey)
        .then(function(response) {
            // Success
            return response.json();
        })
        .then(function(response) {
            let data = getData(response);
            displayResults(data, units);
        })
        .catch(function(error) {
            // Error
            displayError();
        });
/*
    // Async/Await Method
    async function fetchResults() {
        const response1 = await fetch(url + '?q=' + query + '&units=' + units + '&appid=' + APIKey, {mode: 'cors'});
        const response2 = await response1.json();
        const data = await getData(response2);
        displayResults(data, units);
    }
    fetchResults().catch(err => {
        // Error
        displayError();
    });
*/
}

function displayError() {
    let results = document.getElementById('results');
    if (results) { results.remove(); }

    let errorMsg = document.createElement('div');
    errorMsg.id = 'error-msg';
    errorMsg.innerHTML = 'Could not find location.';
    main.insertBefore(errorMsg, main.childNodes[1]);
}

function displayLoading() {
    let main = document.getElementById('main');
    let results = document.getElementById('results');
    if (results) { results.remove(); }
    results = document.createElement('div');
    results.id = 'results';

    results.append('Loading...');
    main.append(results);
}

function getData(response) {
    let data = {
        name : response.name,
        description : response.weather[0].description,
        temp : Math.round(parseFloat(response.main.temp)),
        minTemp : Math.round(parseFloat(response.main.temp_min)),
        maxTemp : Math.round(parseFloat(response.main.temp_max)),
        feelsLike : Math.round(parseFloat(response.main.feels_like)),
        humidity : response.main.humidity,
        wind : response.wind.speed
    }

    return data;
}

function displayResults(data, units) {
    let main = document.getElementById('main');
    let results = document.getElementById('results');
    if (results) { results.remove(); }
    results = document.createElement('div');
    results.id = 'results';

    let resultsLeft = document.createElement('div');
    resultsLeft.id = 'results-left';
    let name = document.createElement('div');
    name.id = 'name';
    name.innerHTML = data.name;
    let description = document.createElement('div');
    description.id = 'description';
    description.innerHTML = data.description.toUpperCase();
    let temp = document.createElement('div');
    temp.id = 'temp';
    let unitsLetter = 'C';
    if (units == 'imperial') { unitsLetter = 'F'; }
    temp.innerHTML = data.temp + '\u00B0' + unitsLetter;
    let minMaxTemp = document.createElement('div');
    minMaxTemp.id = 'min-max-temp';
    minMaxTemp.innerHTML = 'Min: ' + data.minTemp + '\u00B0 | Max: ' + data.maxTemp + '\u00B0';

    let resultsRight = document.createElement('div');
    resultsRight.id = 'results-right';
    let time = document.createElement('div');
    time.id = 'time';
    let t = new Date();
    time.innerHTML = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let feelsLike = document.createElement('div');
    feelsLike.id = 'feels-like';
    feelsLike.innerHTML = 'Feels Like: ' + data.feelsLike + '\u00B0' + unitsLetter;
    let humidity = document.createElement('div');
    humidity.id = 'humidity';
    humidity.innerHTML = 'Humidity: ' + data.humidity + '%';
    let wind = document.createElement('div');
    wind.id = 'wind';
    wind.innerHTML = 'Wind: ' + data.wind + ' mph';

    resultsLeft.append(name, description, temp, minMaxTemp);
    resultsRight.append(time, feelsLike, humidity, wind);
    results.append(resultsLeft, resultsRight);
    main.append(results);
}

export { search };