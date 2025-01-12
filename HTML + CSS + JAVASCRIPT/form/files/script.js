let btn = document.getElementById("submit-btn");

function isCapitalize() {
  let userName = document.getElementById("user-name").value;
//   let nameIput = userName.value;
  userName.charAt(0).toUpperCase()
    ? console.log("first latter is correct")
    : alert("Please fill the first letter in uppercase");
}

btn.addEventListener(`click`, isCapitalize);
