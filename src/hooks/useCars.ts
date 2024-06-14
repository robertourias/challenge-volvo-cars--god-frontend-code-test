import axios from "axios"
import { useEffect, useState } from 'react'

export function useCars() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/cars')
     .then(response => setCars(response.data))
     .catch(error => console.log(error))
  }, [])

  return { cars }
}
