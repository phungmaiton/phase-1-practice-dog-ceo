console.log('%c HI', 'color: firebrick')

const dogImages = document.querySelector('#dog-image-container');

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => renderImages(data.message))

const renderImages = (images) => {
    images.forEach((image) => {
        let img = document.createElement('img');
        img.src = image;
        dogImages.appendChild(img);
    })
}

const dogBreeds = document.querySelector('#dog-breeds');

fetch ("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => {
        renderDogs(Object.keys(data.message))
        filterList(Object.keys(data.message))
    })

const renderDogs = (dogs) => {
    dogs.forEach((dog) => {
        let li = document.createElement('li');
        li.textContent = dog;
        li.className = 'list';
        dogBreeds.appendChild(li);
    })
}

dogBreeds.addEventListener('click', (event) => {
    if (event.target.classList.contains('list')) {
        event.target.style.color = 'pink';
    }
})

//Filter

const breedDropDown = document.querySelector('#breed-dropdown');

const filterList = (breeds) => {
    breedDropDown.addEventListener('change', (event) => {
        const letter = event.target.value;
        const filteredBreed = breeds.filter(breed => breed.startsWith(letter));
        renderFilteredBreeds(filteredBreed);
    })
}

const renderFilteredBreeds = (breeds) => {
    dogBreeds.innerHTML = '';
    breeds.forEach(breed => {
        let li = document.createElement('li');
        li.textContent = breed;
        li.className = 'list';
        dogBreeds.appendChild(li);
    })
}

// const filterList = (breeds) => {
//     breedDropDown.addEventListener('change', (event) => {
//         const value = event.target.value
//         const filterBreeds = breeds.filter(breed => breed.startsWith(value))
//         renderedList(filterBreeds);
//     })
// }

// const renderedList = (breeds) => {
//     dogBreeds.textContent = '';
//     breeds.forEach(breed => {
//         let li = document.createAttribute('li');
//         li.textConnent = breed;
//         dogBreeds.appendChild(li);
//     })
// }

