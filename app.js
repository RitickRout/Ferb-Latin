var btnClk = document.querySelector(".btn")
var txtinput =document.querySelector(".input-area");
var output = document.querySelector(".output-area");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json"

function createurl(text)
{
    return (serverUrl+"?"+"text="+text)
}
function errorHandler()
{
    alert("something wrong with the server");
}

function clkHndlr()
{
  var inputTxt = txtinput.value;

  fetch(createurl(inputTxt)).then(response => response.json()).then(json => {
      output.innerText=json.contents.translated;}).catch(errorHandler)

}

btnClk.addEventListener("click",clkHndlr);