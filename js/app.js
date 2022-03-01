const API_KEY = `eb4a04f2e7e7b25d572a3b6a5f611242`;

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayTem(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTem = temperature => {
    // console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    //set weather icon:
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', url);
}