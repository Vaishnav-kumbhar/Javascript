// const promise = new Promise((resolve, reject) => {
//   // do an async task
//   // db calls, cryptography, network
//   setTimeout(() => {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });

// consumtion of promise
// promise.then(function () {
//   console.log("promise consumed");
// });

/*
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async to resolved");
});
*/

/*
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "vaishnav", email: "k@123@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});
*/

/*
const Promse4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "vaishnav", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// chaining
Promse4.then((user) => user.username)
  .then((username) => console.log(username))
  .catch((error) => console.log(error))
  .finally(() => console.log("done"));
*/

/*
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "barun", password: "123" });
    } else {
      reject("ERROR: Ohh sheet!");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();
*/

/*
async function fetchDetailsOfMine() {
  try {
    const response = await fetch(
      "https://api.github.com/users/Vaishnav-kumbhar"
    );
    const orignalResponse = await response.json();
    console.log(orignalResponse.id);
  } catch (error) {
    console.log("E:", error);
  }
}

fetchDetailsOfMine();
*/

const details = new Promise((resolve, reject) => {
  const data = fetch("https://api.github.com/users/Vaishnav-kumbhar");
  resolve(data);
  reject("error!");
});

details
  .then((result) => result.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
