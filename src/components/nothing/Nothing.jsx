import React from 'react'
import { useContext } from 'react'
import { CityContext } from '../context/CityContext'

const Nothing = () => {
    const {city} = useContext(CityContext)
    return (
        <div className="nothing__container">
            <div>
                <p>Error</p>
                <p>We are sorry we couldn't find the city called <span className="nothing__city">{city}</span> you're looking for.<br/> This could be an api fail or you're writing it wrong.<br/> :(</p>
            </div>
        </div>
    )
}

export default Nothing
