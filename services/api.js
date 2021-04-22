import axios from 'axios'
import API_URL from './api.config'

async function apiGet (url) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.get(urlCall, config)
    return response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

async function apiPost (url, payload) {
  const config = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.post(urlCall, config)
    // eslint-disable-next-line no-console
    console.log(response)
    return response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

async function apiPut (url, payload) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.put(urlCall, config)
    return response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

const api = {}

api.getRestaurants = () => {
  return apiGet('restaurants')
}

api.postSubscribeUser = (payload) => {
  return apiPost('users', payload)
}

api.putSumRestaurantLikes = (payload) => {
  const restaurantId = payload.id
  const url = 'restaurants/' + restaurantId
  return apiPut(url, payload.data)
}

api.getRestaurantsByCategory = ({ category }) => {
  return apiGet('restaurants?category=' + category)
}

api.getOneRestaurant = ({ slug }) => {
  return apiGet('restaurants?slug=' + slug)
}

export default api
