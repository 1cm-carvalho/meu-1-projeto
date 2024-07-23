const myImage = document.querySelector("img");

myImage.onclick = () => { 
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "mmm.jpg") { 
    myImage.setAttribute("src", "mmm2.jpg"); 
  } else {
    myImage.setAttribute("src", "mmm.jpg"); 
  }
};

let myButton = document.querySelector("button"); 
let myHeading = document.querySelector("h1"); 
function setUserName() {
  const myName = prompt("Please enter your name."); 
  if (!myName) { 
    setUserName(); 
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Você é um MOOMOO, ${myName}`; 
  }
}

if (!localStorage.getItem("Nome")) { 
  setUserName(); 
} else {
  const storedName = localStorage.getItem("Nome"); 
  myHeading.textContent = `Você é um MOOMOO, ${storedName}`;
}
myButton.onclick = () => { 
  setUserName();
};

