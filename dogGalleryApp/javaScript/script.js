async function fetchRandomDog() {
    const loading = document.getElementById('loading');
    const errorMsg = document.getElementById('error-message');
    const dogImage = document.getElementById('dog-image');

    if (errorMsg) {
        errorMsg.style.display = 'none';
    }

    if (loading) {
        loading.style.display = 'block';
    }

    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            if (loading) {
                loading.style.display = 'none';
            }
            if (errorMsg) {
                errorMsg.textContent = 'Failed to load dog image. Try again!';
                errorMsg.style.display = 'block';
            }
            return;
        }
        const data = await response.json();
        dogImage.src = data.message;
        dogImage.alt = 'Random Dog';

        if (loading) {
            loading.style.display = 'none';
        }
    } catch (error) {
        if (loading) {
            loading.style.display = 'none';
        }

        if (errorMsg) {
            errorMsg.textContent = 'Failed to load dog image. Try again!';
            errorMsg.style.display = 'block';
        }
    }
}