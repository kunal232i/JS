let titleDIV = document.getElementById("title");

console.log("before: ", titleDIV.innerText);

let msg = "Goodbyee !!";
titleDIV.innerText = msg;
console.log("after: ", titleDIV.innerText);

titleDIV.innerHTML = `<p>${msg}</p>`;
