function handleSubmit(event) {
  // this code will run on form submission

  //prevent page from automatically reloading
  event.preventDefault()

  // reset background of identicon grid
  // resetBackground function defined below
  resetBackground()

  //store user input string
  let userInput = document.getElementById('user-input').value

  //create new identicon based on user input string
  newIdenticon = new Identicon(userInput)

  // set up a new object to represent which boxes will have a color
  // invokes the setupBoxMap function, defined below
  boxMap()

  // make! that! identicon!
  // refer to src/domController.js
  updateDOM()
}

// When the page loads...
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

// This object maps out which boxes will have color
// The keys correspond to the span ids of the identicon div element childen in index.html
// The values will be used in tandem with an array constructed for each new Identicon Class object
// The object will have an array of 15 booleans, e.g. [true, false, false...]
let boxMap = function setupBoxMap() {
  let boxMapObj = {
    '0-0': 0,
    '0-1': 1,
    '0-2': 2,
    '0-3': 1,
    '0-4': 0,
    '1-0': 3,
    '1-1': 4,
    '1-2': 5,
    '1-3': 4,
    '1-4': 3,
    '2-0': 6,
    '2-1': 7,
    '2-2': 8,
    '2-3': 7,
    '2-4': 6,
    '3-0': 9,
    '3-1': 10,
    '3-2': 11,
    '3-3': 10,
    '3-4': 9,
    '4-0': 12,
    '4-1': 13,
    '4-2': 14,
    '4-3': 13,
    '4-4': 12,
  }

  newIdenticon.booleanArr.forEach(function(boolean, index){
    for (var key in boxMapObj) {
      if(boxMapObj[key] == index) {
        boxMapObj[key] = boolean
      }
    }
  })
  return boxMapObj
}

function resetBackground() {
  document.querySelectorAll("#identicon span").forEach(span => { span.style.backgroundColor = "rgb(240, 240, 240)"})
}
