import axios from 'axios';

const allUsers = () => {
  axios.get('http://localhost:3000/api/all-users')
  .then(function (response) {
    return response.data
  })
  return (
    <p>Все пользователи</p>
  )
}

export default allUsers