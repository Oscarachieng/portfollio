// Adds Smooth Scroll script

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});

// Adding event listener
document.querySelector("#submit");
document.addEventListener("submit", function (e) {

  e.preventDefault();
  //console.log(e)


// An Array of objects to store our user input data
  const clientList = [];

  // getting Input data into global varaibles
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (name !== " " && email !== "" && phoneNumber !== " " && message !== " ") {
    const client = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };
    clientList.push(client);

      // storing our array in local storage
      window.localStorage.setItem("clientList", JSON.stringify(clientList));
      document.querySelector("form").reset();
      alert("Message submitted susccessfully, click OK to continue. Thanks");
    } else {
      alert("Kindly Fill all fields correctly");
    }

});







// Submit function onsubmit event
//function submit(e) {
 
  // getting Input data into global varaibles
 
 
  
//}
