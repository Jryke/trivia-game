import axios from 'axios'

// use axios and set base URL for fetching data in action creators
export default axios.create({
  baseURL: 'https://opentdb.com'
})