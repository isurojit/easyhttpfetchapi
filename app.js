const http = new EasyHTTP;

//Get Users
// http.get('https://jsonplaceholder.typicode.com/users').then((data) => console.log(data))
// .catch((err) => console.log(err));

//Create Data
const userData = {
    name: 'Surojit Manna',
    username: 'isuro',
    email: 'support@isuro.tech'
}

//create a post
// http.post('https://jsonplaceholder.typicode.com/users',userData).then((data) => console.log(data))
// .catch((err) => console.log(err));

//update a post
http.put('https://jsonplaceholder.typicode.com/users/2',userData).then((data) => console.log(data))
.catch((err) => console.log(err));