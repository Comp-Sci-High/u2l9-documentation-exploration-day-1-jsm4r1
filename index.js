// Async Functions with randomuser.me API
// ----------------------------------------------------

// Define a function called fetchUserData(url)
//    - It should take a URL as a parameter
//    - Use fetch() and await the response
//    - Convert the response to JSON
//    - Log out the JSON or specific info (like name or country)

let requestUrl = "https://randomuser.me/api/"

async function fetchUserData(requestUrl) {
    let response = await fetch(requestUrl)
    let data = await response.json()
    console.log(data)
}

// ----------------------------------------------------
// Create a variable for each request below (reqUrl1, reqUrl2, etc.)
// Then call your fetchUserData() function with each one.


// 1 URL to Get 8 Random Users
// Call the fetchUserData function with this URL

let reqUrl1 =  requestUrl + "?results=8"
fetchUserData(reqUrl1)

// 2 URL to Get a Random User from Poland
// Call the fetchUserData function with this URL

let reqUrl2 = requestUrl + "?nat=ca"
fetchUserData(reqUrl2)


// 3 URL to Get a Random User that’s Male
// Call the fetchUserData function with this URL

let reqUrl3 = requestUrl + "?gender=male"
fetchUserData(reqUrl3)


// 4 URL to Get a Random User while Excluding Their Email
// Call the fetchUserData function with this URL

let reqUrl4 = requestUrl + "?exc=email"
fetchUserData(reqUrl4)


// 5 Get 5 Female Users from the Colombia
// Call the fetchUserData function with this URL

let reqUrl5 = requestUrl + "?gender=female&nat=fr&results=5"
fetchUserData(reqUrl5)
