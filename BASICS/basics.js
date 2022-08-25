//  TIME, TIDE AND JAVASCRIPT wait for none -->

//               <!--  ======= PROMISES ======= -->

// <!-- A JavaScript Promise object can be:

// .. Pending
// .. Fulfilled
// .. Rejected

// The Promise object supports two properties: state and result.

// ***** While a Promise object is "pending" (working), the result is undefined.

// ***** When a Promise object is "fulfilled", the result is a value.

// ***** When a Promise object is "rejected", the result is an error object. 


// console.log('fetch : ', 
 // fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
// )
  
//  

//              <!--  ======= ASYNC / AWAIT ======= 

//  async makes a function return a Promise

//  await makes a function wait for a Promise

//  must create a function

const getDog = async()=>{
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

}
getDog()