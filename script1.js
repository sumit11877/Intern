// wait till the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the button and the div
    const jokeText = document.getElementById('joke-text');
    const jokeBtn = document.getElementById('new-joke-btn');

    // fetch a joke from the API and display it
    async function fetchJoke(){
        jokeBtn.disabled = true;
        jokeText.textContent = 'Loading...';
        try {
            const response = await fetch(
                'https://official-joke-api.appspot.com/random_joke'
            );

            console.log('Response: ', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Joke Data', data);
            jokeText.textContent = `${data.type} - ${data.id} - ${data.setup} - ${data.punchline}`;
        } catch (error) {
            jokeText.textContent = 'Failed to fetch joke. Please try again.';
            console.error('Error fetching joke:', error);
        }

        jokeBtn.disabled = false;
    }

    fetchJoke();

    // Add click event listener to the button
    jokeBtn.addEventListener('click', fetchJoke);

}) 