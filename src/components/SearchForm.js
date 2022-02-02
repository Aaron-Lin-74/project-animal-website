import React from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import { FcSearch } from 'react-icons/fc'
import './SearchForm.css'

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='search-section'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='search-form-control'>
          <label htmlFor='name'>
            Search your favorite animal
            <FcSearch />
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
