import React from 'react'
import { useState } from 'react'
import { WeatherContext } from './components/context/WeatherContext'

import WeatherScreen from './components/weather/WeatherScreen'
import './styles/styles.scss'

const WeatherApp = () => {

    const [city, setCity] = useState(localStorage.getItem('city') ? localStorage.getItem('city') : 'london')
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <WeatherContext.Provider value={{city, setCity, loading, setLoading}}>
            <WeatherScreen/>
            </WeatherContext.Provider>
        </div>
    )
}

export default WeatherApp
