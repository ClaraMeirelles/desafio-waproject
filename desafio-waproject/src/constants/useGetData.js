import axios from 'axios'
export const useGetData = (amount, difficulty) => {
    axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`)
}