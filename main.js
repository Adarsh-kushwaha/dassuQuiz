
const btn = document.getElementById("btn");
const printJoke = document.getElementById("printJoke");
btn.addEventListener("click", getJoke);



async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    });




    const jokeObj = await jokeData.json();
    console.log(jokeObj)
    printJoke.innerHTML = `<div>${jokeObj.joke}</div>`


}

getJoke();