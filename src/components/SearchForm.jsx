import React from 'react'
import { useGlobalContext } from './context'


const SearchForm = () => {

  const {setSerchItme} = useGlobalContext()

  const handleSubmit = e => {
    e.preventDefault()

    const searchValue = e.target.elements.search.value
    // console.log(searchValue);

    if(!searchValue) return
    setSerchItme(searchValue)
    
  }

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder='cat' name='search' className="form-input search-input" />
        <button className="btn" type='submit'>Search</button>
      </form>
    </section>
  )
}

export default SearchForm