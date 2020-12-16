const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
generateJoke()

jokeBtn.addEventListener('click', generateJoke);


// Using Async / Await
async function generateJoke() {

    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);
     
    const data = await res.json();

    jokeElement.innerHTML = data.joke;

}


// Using .then()

// function generateJoke() {

//     const config = {
//         headers : {
//             'Accept' : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then( response => response.json())
//         .then(data => {
//             jokeElement.innerHTML = data.joke;
//         });
// }




