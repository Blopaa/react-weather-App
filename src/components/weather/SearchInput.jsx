import React from 'react'
import { useContext } from 'react'
import useInput from '../../hooks/useInput'
import { CityContext } from './CityContext'

const SearchInput = () => {

    const {setCity} = useContext(CityContext)

    const [values, handleChange] = useInput({
        city: ''
    })

    const {city} = values

    const handleSubmit = (e) => {
        e.preventDefault()
        if(city.length <= 0){
            return
        }

        setCity(city)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={city} name="city" autoComplete="off" />
        </form>
    )
}

export default SearchInput
