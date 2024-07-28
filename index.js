function displayPoem(response){
    new Typewriter('#poem', {
      strings: response.data.answer,
      autoStart: true,
      delay:1,
      cursor:"",
    });}



function generatePoem(event){
event.preventDefault();

let instructionsInput=document.querySelector("#user-instructions")
let apiKey="28d6af13edado02eca594bd3ta001d5e";
let prompt=`User instructions are: Generate a French Poem about ${instructionsInput.value}`;
let context="You are a a French poet and you love to generate a 4 line poem in basic HTML and separate each line with a </br>.Please follow the user instructions, translate user instructions to French and generate a poem based on the provided instructions ONLY.Do not include a title. Please sign the poem as 'SheCodes AI' inside a strong element like this <strong> SheCodes AI </strong> at the end of the poem and NOT at the begining";
let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement=document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML= `<div class="generating">⏳ Generating a French poem just for you about ${instructionsInput.value}..</div>`

axios.get(apiURL).then(displayPoem);


   
}

let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);


