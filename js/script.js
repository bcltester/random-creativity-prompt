/*
const $ = function(elem) {

}
*/
// ^oops I forgot the function keyword after the equals sign */

/*
function $ (elem) {

  }

const $ = (elem) => {

}
*/
// ^I forgot the equals sign between the function name and arguments, and arrow between arguments and the statement block */

/* Helper Function */
const $ = (elem) => {
  return document.querySelector(elem);
}

let arr = [];

const getPrompts = () => {
  fetch("data/prompts.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.prompts);
//    arr = [];
//    let arr = [];
    for (let prompt of data.prompts) {
      console.log(prompt);
      arr.push(prompt);
      console.log(arr);
    }
//    return arr[Math.floor(Math.random()*arr.length)];
    })
  .catch ( e => {
    console.log(e.message);
  })
};

const addPrompts = () => {
  fetch("data/prompts.json", {
    method: "POST",
    body: JSON.stringify(`{prompts: ${arr}}`)
  })
  .then(response => response.text());
  console.log(response);
};

getPrompts();

let generate = $("#generate");
generate.addEventListener("click", (e) => {
  e.preventDefault();
  let randomPrompt = arr[Math.floor(Math.random()*arr.length)];
  $(".output").innerText = randomPrompt;
});

let inp = $("input");
let btn_submit = $("button[type='submit']");
btn_submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("inside addEventListener");
  console.log(inp.value);
  if (inp.value) {
    arr.push(inp.value);
    console.log(arr);
    addPrompts();
    console.log("after addPrompts");
  }

});