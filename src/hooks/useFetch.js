import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Custom hook that fetches the data (like reviews and animals) from server
const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Fetch the data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      setData(response.data)
      setIsLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])
  return { data, isLoaded }
}

export default useFetch
