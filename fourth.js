document.addEventListener("DOMContentLoaded", function() {
    const imageurl = document.getElementById('dog-image');
    const btn = document.getElementById('submit');
    async function fetchDogImage() {
        try {
            const response = await fetch('https://api.thedogapi.com/v1/images/search');
            console.log('Response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Image Data:', data);
            imageurl.src = data[0].url;
            console.log(data[0])
            imageurl.width = 800;
            imageurl.height = 800;
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    }
    fetchDogImage();
    btn.addEventListener('click', fetchDogImage);
}) 
