// wait till the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the button and the div
    const jokeText = document.getElementById('joke-text');
    const jokeBtn = document.getElementById('new-joke-btn');
    const RAPIDAPI_KEY = 'PASTE_YOUR_RAPIDAPI_KEY_HERE';

    // Fetch synonyms from RapidAPI and render them in the card.
    async function fetchJoke(){
        jokeBtn.disabled = true;
        jokeText.textContent = 'Loading...';

        if (RAPIDAPI_KEY === 'PASTE_YOUR_RAPIDAPI_KEY_HERE') {
            jokeText.textContent = 'Add your RapidAPI key in script5.js to load synonyms.';
            jokeBtn.disabled = false;
            return;
        }

        const url = 'https://wordsapiv1.p.rapidapi.com/words/lovely/synonyms';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const result = await response.json();
            const synonyms = result.synonyms || [];

            if (synonyms.length === 0) {
                jokeText.textContent = 'No synonyms found right now.';
            } else {
                jokeText.textContent = synonyms.slice(0, 8).join(', ');
            }
        } catch (error) {
            console.error(error);
            jokeText.textContent = 'Failed to load synonyms. Try again.';
        }

        jokeBtn.disabled = false;
    }

    fetchJoke();

    // Add click event listener to the button
    jokeBtn.addEventListener('click', fetchJoke);

});