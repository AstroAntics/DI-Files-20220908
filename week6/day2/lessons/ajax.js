// AJAX allows you to make requests to the server without reloading the page and
// receive and work with data from the server.
// ref: <https://xhr.spec.whatwg.org/#introduction> and <https://javascript.info/xmlhttprequest>
// <https://www.youtube.com/watch?v=uBR2wAvGces>

console.log("===== FETCH TUTORIAL =====");

/* Fetch Syntax: 
fetch(url) // passing the url of the API as a parameter (the URL is the only mandatory argument)
.then(function() {
    // Handle the data from the API
})
.catch(function() {
    // Handle any errors
});

fetch() returns a promise (a Response) that is either rejected (caught) or resolved 
which(executes the then() method.)

Response provides multiple promise-based methods to access the body in various formats:
response.text() – read the response and return as text,
response.json() – parse the response as JSON,
response.formData() – return the response as FormData object,

*/

// First fetch example
console.log("Fetching sunrise time...");
const getSunriseTime = () => {
  console.log("Looking...");
  fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
    .then((res) => res.json())
    .then((res) => console.log(res.results))
    .then((res) =>
      console.log(`Sunrise time for Tel Aviv: ${res.results.sunrise}`)
    )
    .catch((error) => console.warn(error));
  console.log("done fetching sunrise time.");
};

getSunriseTime();

// More exercises with fetch
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
})
  .then((response) => {
    // convert to json
    return response.json();
  })
  .then((data) => {
    // print data to console
    console.log(data);
  })
  .catch((err) => {
    // Catch errors
    console.log("Request Failed", err);
  });

/* Fetch API
  {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client,
    body: JSON.stringify(data)
  }
  */

/* Sample POST request with request options */
fetch("/save/data", {
  method: "POST",
  body: JSON.stringify(data), // if sending data as array or object
  // body: new FormData(form), // post body as form data
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded' // if post body as form data
  },
});

/* Response object methods */
fetch("https://zivuch.github.io/emails.xml")
  .then((res) => {
    // return res.text()       // response body (=> Promise)
    // return res.json()      // parse via JSON (=> Promise)
    console.log(res.status); //=> 200
    console.log(res.statusText); //=> 'OK'
    console.log(res.redirected); //=> false
    console.log(res.ok); //=> true
    console.log(res.url); //=> 'http://site.com/data.json'
    console.log(res.type); //=> 'basic'
    //   ('cors' 'default' 'error'
    //    'opaque' 'opaqueredirect')
    console.log(res.headers.get("Content-Type"));
  })
  .then((data) => {
    console.log(data);
  });
