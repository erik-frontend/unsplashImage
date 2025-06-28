import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from './context'
const url = "https://api.unsplash.com/search/photos/?client_id=O87v4AmV7BrvdapXw77SUcHSkdrjFw7b-_q8GMfl8fU&query=cat"

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
  
  return (
    <></>
  )
}

export default Galery