import axios from 'axios'

const getTitle = url => new Promise((resolve, reject) => 
  axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((response) => {
      const html = new DOMParser().parseFromString(response.data, "text/html")
      const title = html.querySelector('title').innerText
      resolve(title)
    })
    .catch(err => reject(err))
)

export default getTitle
