import React from 'react'
import useInput from '../../hooks/useInput'

const SearchInput = ({handleSearch}) => {

    const [values, handleChange] = useInput({
        city: ''
    })

    const {city} = values

    const handleSubmit = (e) => {
        e.preventDefault()
        if(city.length <= 0){
            return
        }

        handleSearch(city)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={city} name="city" autoComplete="off" />
        </form>
    )
}

export default SearchInput
