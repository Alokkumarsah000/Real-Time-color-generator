const containerE1 = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);
    
}
const colorContainerE1s = document.querySelectorAll(".color-container")
generateColor();
// console.log(colorContainerE1s)
function generateColor(){
   colorContainerE1s.forEach((containerE1)=>{
    const newColorCode = randomColor()
    // console.log(newColorCode)
    containerE1.style.backgroundColor="#" + newColorCode;
    containerE1.innerText = "#" + newColorCode;
   })  
}

function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
            const randomNum = Math.floor(Math.random() * chars.length);        
            // console.log(randomNum);
            colorCode += chars.substring(randomNum, randomNum + 1);
            // console.log(colorCode,randomNum)
    }
    return colorCode;
}