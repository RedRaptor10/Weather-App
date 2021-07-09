/*
https://openweathermap.org/
Username: Anonymous3820193829
Email: ot1gs6+c1qj34m7d4xg4@sharklasers.com
Password: jgroigjweoifweofiewj
API Key: 09167145993a980df9291e4c17eda5b5

OpenWeatherMap API Docs:
https://openweathermap.org/current
*/

import { search } from './search.js';

function initialize() {
    // Container
    let container = document.getElementById('container');

    // Header
    let header = document.createElement('div');
    header.id = 'header';
    let title = document.createElement('a');
    title.id = 'title';
    title.innerHTML = 'Weather App';
    title.addEventListener('click', () => {
        location.reload();
    });
    header.append(title);

    // Main
    let main = document.createElement('div');
    main.id = 'main';
    let location = '';
    let units = 'metric'; // metric : Celcius (Default), imperial : Fahrenheit

    // Search Box
    let searchBar = document.createElement('div');
    let searchBox = document.createElement('input');
    let searchBtn = document.createElement('div');
    searchBar.id = 'search-bar';
    searchBox.id = 'search-box';
    searchBtn.id = 'search-btn';
    searchBox.setAttribute('type', 'text');
    searchBtn.innerHTML = 'Search';

    searchBox.addEventListener('keyup', function(event) {
        if (event.key == 'Enter') {
            location = searchBox.value;
            search(location, units);
        }
    });
    searchBtn.addEventListener('click', () => {
        location = searchBox.value;
        search(location, units);
    });

    searchBar.append(searchBox, searchBtn);

    // Units
    let unitsBar = document.createElement('div');
    let celciusBtn = document.createElement('div');
    let fahrenheitBtn = document.createElement('div');
    unitsBar.id = 'units-bar';
    celciusBtn.innerHTML = '\u00B0 C';
    fahrenheitBtn.innerHTML = '\u00B0 F';
    celciusBtn.style.background = 'rgba(64,64,64,.75)';
    fahrenheitBtn.style.background = 'rgba(0,0,0,.75)';
    celciusBtn.addEventListener('click', () => {
        if (units != 'metric') {
            celciusBtn.style.background = 'rgba(64,64,64,.75)';
            fahrenheitBtn.style.background = 'rgba(0,0,0,.75)';
            units = 'metric';
            search(location, units);
        }
    });
    fahrenheitBtn.addEventListener('click', () => {
        if (units != 'imperial') {
            celciusBtn.style.background = 'rgba(0,0,0,.75)';
            fahrenheitBtn.style.background = 'rgba(64,64,64,.75)';
            units = 'imperial';
            search(location, units);
        }
    });
    unitsBar.append(celciusBtn, fahrenheitBtn);

    main.append(searchBar, unitsBar);
    container.append(header, main);
}

export { initialize };