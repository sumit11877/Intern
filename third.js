// wait till the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the button and the div
    const imageUrl = document.getElementById('cat-image');
    const Btn = document.getElementById('submit');

    // fetch a joke from the API and display it
    async function fetchJoke(){
        Btn.disabled = true;
        
        try {
            const response = await fetch(
                'https://api.thecatapi.com/v1/images/search'
            );

            console.log('Response: ', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Image Data', data);
            imageUrl.src = data[0].url;
            console.log(data[0])
            imageUrl.width= 500
            imageUrl.height=500
            
        } catch (error) {
            console.error('Error fetching joke:', error);
        }

        Btn.disabled = false;
    }

    fetchJoke();

    // Add click event listener to the button
    Btn.addEventListener('click', fetchJoke);

})