import React from 'react'
import { useState } from 'react'
import { CityContext } from './components/context/CityContext'

import WeatherScreen from './components/weather/WeatherScreen'
import './styles/styles.scss'

const WeatherApp = () => {

    const [city, setCity] = useState(localStorage.getItem('city') ? localStorage.getItem('city') : 'london')

    return (
        <div>
            <CityContext.Provider value={{city, setCity}}>
            <WeatherScreen/>
            </CityContext.Provider>
        </div>
    )
}

export default WeatherApp
