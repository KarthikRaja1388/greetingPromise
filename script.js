let nameInputNode = document.querySelector(".name");
let btnGreet = document.querySelector(".btn-greet");
let display = document.querySelector(".display");

function greetPerson(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      const greeting = `Hello ${name}`;
      resolve(greeting);
    } else {
      reject(new Error("Name is not resolved"));
    }
  });
}

btnGreet.addEventListener("click", () => {
  greetPerson(nameInputNode.value)
    .then((greeting) => {
      display.textContent = greeting;
    })
    .catch((error) => {
      console.log(error.message);
    });
});
