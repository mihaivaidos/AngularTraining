async function fetchRandomDog() {
    const loading: HTMLElement | null = document.getElementById('loading');
    const errorMsg: HTMLElement | null = document.getElementById('error-message');
    const dogImage: HTMLImageElement | null = document.getElementById('dog-image') as HTMLImageElement;

    if(errorMsg) {
        errorMsg.style.display = 'none';
    }

    if(loading) {
        loading.style.display = 'block';
    }

    try {
        const response: Response = await fetch('https://dog.ceo/api/breeds/image/random');
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

        const data: any = await response.json();
        dogImage.src = data.message;
        dogImage.alt = 'Random Dog';
        if(loading) {
            loading.style.display = 'none';
        }
    } catch (error: unknown) {
        if(loading) {
            loading.style.display = 'none';
        }
        if(errorMsg) {
            errorMsg.textContent = 'Failed to load dog image. Try again!';
            errorMsg.style.display = 'block';
        }
    }
}