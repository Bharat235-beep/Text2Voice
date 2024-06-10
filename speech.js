
let speech = new SpeechSynthesisUtterance()
//convert text to voice
function convertToVoice(userText) {

  window.speechSynthesis.cancel()
  speech.text = userText;
  speech.lang = "en-US";
  let voices = window.speechSynthesis.getVoices();
  // speech.voice = voices.find(voice => voice.lang === "en-US" && voice.name === "Google US English");
  speech.voice = voices.find(voice => voice.name === document.querySelector("select").value)
  window.speechSynthesis.speak(speech)

}
// Get the list of voices
function logVoices() {
  let voices = window.speechSynthesis.getVoices();
  console.log(voices.length)
  // Log the details of each voice
  voices.forEach(voice => {
    let select = document.querySelector("select")
    let option = document.createElement("option")
    option.value = voice.name
    option.innerHTML = `Name: ${voice.name} , Language: ${voice.lang}`

    select.appendChild(option)
    // console.log(`Name: ${voice.name}, Language: ${voice.lang}, Default: ${voice.default}`);
  });
}
logVoices();
//pause voice
function mypause() {
  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
  }
}
//resume voice
 const myresume = () => {
  
     window.speechSynthesis.resume();
   
 }
let resumeBtn=document.getElementById('resume')
console.log(resumeBtn)
resumeBtn.addEventListener('click', () => {
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    console.log("Speech resumed");
  }
});

