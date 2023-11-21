console.log("hello")

const dice = document.querySelector(".dice")
const advice = document.querySelector('.advice span')
const advice_title= document.querySelector('.advice_id')
const advice_id = document.querySelector('.advice_id span')
const advice_id_name = document.querySelector(".advice_id_name")

dice.addEventListener("click",() => getAdvice())

// fetch('https://api.adviceslip.com/advice/').then((response) => {
//     if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`)
//     }
//     return response.json();
    
// })
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.json();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => {
    // poemDisplay.textContent = text;
    console.log(text.slip)
    advice_id.innerHTML = text.slip.id
    advice.innerHTML = text.slip.advice

   
  })
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => {
    // poemDisplay.textContent = `Could not fetch verse: ${error}`;
  });
}
getAdvice()



