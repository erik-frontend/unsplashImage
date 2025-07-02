import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from './context'
const url = "https://api.unsplash.com/search/photos/?per_page=20&client_id=O87v4AmV7BrvdapXw77SUcHSkdrjFw7b-_q8GMfl8fU"

const Galery = () => {

  const { serchItme } = useGlobalContext()

  const response = useQuery({
    queryKey: ["images", serchItme],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${serchItme}`)
      return result.data
    }
  })
  console.log(response);
  if (response.isLoading) {
    return (
      <section className='image-container'><h4>Loading...</h4></section>
    )
  }
  if (response.isError) {
    return (
      <section className='image-container'><h4>There are an Error...</h4></section>
    )
  }

  const results = response.data.results
console.log(results);

  if (results.length < 1) {
    return (
      <section className='image-container'><h4>No results found...</h4></section>
    )
  }

  return (
    <section className='image-container'>
      {results.map(item => {
        const url = item.urls.regular
        return <img src={url} alt={item.alt_description} key={item.id} className='img'/>
      }
      )}
    </section>
  )
}

export default Galery