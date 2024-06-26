import { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const [text, setText] = useState('')
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()
  const handleChange = (e) => {
    setText(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      setSearchTerm(text)

    }

  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input className="form-input" placeholder='type your meal here' type='text' value={text} onChange={handleChange} />
        <button className='btn' type='submit'>Search</button>
        <button className='btn btn-hipster' type='button' onClick={handleRandomMeal}>Suprise me</button>

      </form>
    </header>
  )
}

export default Search