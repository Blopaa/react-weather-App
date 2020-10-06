import React from 'react'
import { useState } from 'react'
import { CityContext } from './components/weather/CityContext'
import WeatherScreen from './components/weather/WeatherScreen'
import './styles/styles.scss'

const WeatherApp = () => {

    const [city, setCity] = useState('London')

    return (
        <div>
            <CityContext.Provider value={{city, setCity}}>
            <WeatherScreen/>
            </CityContext.Provider>
        </div>
    )
}

export default WeatherApp
