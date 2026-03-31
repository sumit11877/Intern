document.addEventListener('DOMContentLoaded', function() {
    const imageUrl = document.getElementById('dog-image');
    const btn = document.getElementById('submit');
    async function fetchImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            console.log('Response', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }       
            const data = await response.json();
            console.log('Image Data', data);
            imageUrl.src = data.message;
            console.log(data[0])
            imageUrl.width = 500
            imageUrl.height = 500
        } catch (error) {
            console.error('Error fetching image:', error);
        }   
    }
    
    btn.addEventListener('click', fetchImage);
})
