{
    let form = document.getElementById('weatherForm')

    async function handleSubmit(e){
        e.preventDefault()
        let inputCity = e.target.city.value

        let weatherForm = await getWeatherInfo(inputCity)
        e.target.city.value = ''

        buildWeatherFormCard(weatherForm)
    }

    async function getWeatherInfo(city){
        var key = e466bef46d86e7b3c52399fa85c0e758
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        let data = await res.json()
        // return data, DONT FORGET!!!!!!!!
    }

    function bulidWeatherFormTable(weatherForm){
        let div = document.createElement('div')
        div.className = 'card mb-3'

        

    }
}