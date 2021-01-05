/** 
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Surojit Manna
 * @license Opensource
 * 
 * 
 **/

 class EasyHTTP {
    //Make HTTP GET Request
    get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    //Make Post Request
    post(){

    }

    //Make Put Request
    put(){

    }

    //Make Delete Request
    delete(){

    }
 }