import Weather from "./Weather"

export default {
    title: 'weather-app',
    components: Weather
}

export function smWeather() {
    return(
       <Weather/>
    )
}