// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
function initialize(){
const modal = document.getElementById("modal")
modal.classList.add("hidden")
const allHearts = document.querySelectorAll(".like-glyph")
allHearts.forEach((heart)=>
{
  heart.addEventListener("click", ()=>{
    mimicServerCall()
    .then(()=>{
      if(heart.classList.contains("activated-heart") !== true){
      heart.innerHTML = FULL_HEART
      heart.classList.add("activated-heart")
      full = true
      } else if(heart.classList.contains("activated-heart")){
      heart.innerHTML = EMPTY_HEART
      heart.classList.remove("activated-heart")
      }
    })
    .catch((err)=>{
      modal.classList.remove("hidden")
      setTimeout(()=>modal.classList.add("hidden"), 3000)

    })
  })
})
}

initialize()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
