// wait till the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the button and the div
    const imageUrl = document.getElementById('dog-image');
    const Btn = document.getElementById('submits');

    // fetch a joke from the API and display it
    async function fetchJoke(){
        Btn.disabled = true;
        
        try {
            const response = await fetch(
                'https://dog.ceo/api/breeds/image/random'
            );

            console.log('Response: ', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Image Data', data);
            imageUrl.src = data.message;
            console.log(data)
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