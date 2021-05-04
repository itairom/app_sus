export const axiosService = { askFromGoogleBooks} 


// const URL ='https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%20javascript'

function askFromGoogleBooks(searchVal) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchVal}`)
        .then(res=>{
            return res.data.items
        })
}