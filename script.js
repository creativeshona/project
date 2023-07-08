

const button = document.getElementById("button"); 
const buttonPressed = (e) => {
  e.target.innerText = e.target.innerText.trim() === "close" ? "view plan" : "close";
 
}
button.addEventListener("click", buttonPressed);
function plan(){
    document.getElementById("plan").style.opacity= "1" 


}





