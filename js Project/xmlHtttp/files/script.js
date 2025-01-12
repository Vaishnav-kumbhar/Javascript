const requestUrl = "https://api.github.com/users/Vaishnav-kumbhar";

const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);
  }
};
xhr.send();

console.log("here");
