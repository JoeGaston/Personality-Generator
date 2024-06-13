// ! ON PAGE LOAD
document.querySelector('button').addEventListener('click', getFetch)


//! API REQUEST
function getFetch(){
  const url = `https://randomuser.me/api/`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results[0]) // ! This will show all data requested

        document.querySelector("#person_name").innerText = data.results[0].name.first + " " + data.results[0].name.last

        document.querySelector("img").src = data.results[0].picture.medium

        document.querySelector("#location").innerText = data.results[0].location.city + ", " + data.results[0].location.state

        document.querySelector("#age").innerText = data.results[0].dob.age

        document.querySelector("#cell").innerText = data.results[0].cell

        document.querySelector("#email").innerText = data.results[0].email

      //   if (data.results[0].location.country === 'China' || 'Russia' || 'Iran' || 'North Korea') 
      //   {
      //   document.querySelector("#warning").innerText = 'Danger'
      // } else {
      //   document.querySelector("#warning").innerText = 'No Danger'
      // }
      })


      //! All processes go above this
      .catch(err => {
          console.log(`error ${err}`)
      });
}



// TODO 

// try a condition that only lets in certain countries?
// example
// example

