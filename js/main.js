{
    let form = document.getElementById('weatherForm')

    async function handleSubmit(e){
        e.preventDefault()
        let inputCity = e.target.city.value.toLowerCase()
        let weatherForm = await getWeatherInfo(inputCity)

        e.target.city.value = ''

        buildWeatherFormTable(weatherForm)
        weatherRecommendation(weatherForm)
    }

    async function getWeatherInfo(inputCity){
        let key = 'e466bef46d86e7b3c52399fa85c0e758'
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}&units=imperial`)
        let data = await res.json()
        return data
    }

    function buildWeatherFormTable(weatherForm){
        let table = document.createElement('div')
        table.className = 'card'

        let cardBody = document.createElement('div')
        cardBody.className = 'card-body'

        let title = document.createElement('h1')
        title.className = 'card-title'
        title.innerHTML = weatherForm.name

        let weather = document.createElement('h2')
        weather.className = 'card-subtitle mb-2 text-muted'
        weather.innerHTML = weatherForm.weather[0].description

        let temp = document.createElement('p')
        temp.className = 'card-text text-success'
        temp.innerHTML = `Temp: ${weatherForm.main.temp} °F`

        let feelsLike = document.createElement('p')
        feelsLike.className = 'card-text text-success'
        feelsLike.innerHTML = `Feels like: ${weatherForm.main.feels_like} °F`

        let maxTemp = document.createElement('p')
        maxTemp.className = 'card-text text-danger'
        maxTemp.innerHTML = `Max-Temp: ${weatherForm.main.temp_max} °F`

        let minTemp = document.createElement('p')
        minTemp.className = 'card-text text-primary'
        minTemp.innerHTML = `Min-Temp: ${weatherForm.main.temp_min} °F`

        table.append(cardBody)
        cardBody.append(title)
        cardBody.append(weather)
        cardBody.append(feelsLike)
        cardBody.append(temp)
        cardBody.append(maxTemp)
        cardBody.append(minTemp)

        let display = document.getElementById('weatherTable')
        display.innerHTML = ''
        display.append(table)   
       
    }

    function weatherRecommendation(weatherForm){
        let message = document.getElementById('recommendation')
        if(weatherForm.main.temp < 50){
            message.innerHTML = 'It is very cold weather today. Stay home.'
            let navBar = document.getElementById('nav')
            navBar.className = 'navbar navbar-dark bg-primary'
            let button = document.getElementById('button')
            button.className = 'btn btn-primary d-block w-100'
        } else if(weatherForm.main.temp < 70){
            message.innerHTML = 'That is a beautifull weather. Greate time to hang out outside!'
            let navBar = document.getElementById('nav')
            navBar.className = 'navbar navbar-dark bg-success'
            let button = document.getElementById('button')
            button.className = 'btn btn-success d-block w-100'
        } else if(weatherForm.main.temp < 85){
            message.innerHTML = 'Really warm day today. I would recommend to stay home, but still ok time to hang out.'
            let navBar = document.getElementById('nav')
            navBar.className = 'navbar navbar-dark bg-warning'
            let button = document.getElementById('button')
            button.className = 'btn btn-warning d-block w-100'
        } else {
            message.innerHTML = 'Extremely hot day! Defently recommend to stay home.'
            let navBar = document.getElementById('nav')
            navBar.className = 'navbar navbar-dark bg-danger'
            let button = document.getElementById('button')
            button.className = 'btn btn-danger d-block w-100'
        }      
    }
        form.addEventListener('submit', handleSubmit)
}