
//const search = new Filter('search', 'data-caption');

const search = document.querySelector('#search');
const captions = document.querySelectorAll('[data-caption]');

const searchBar = event => {
    const searchTerm = event.target.value.toLowerCase();
    captions.forEach(captions => {
        const text = captions.getAttribute('data-caption').toLowerCase();
        if(text.includes(searchTerm)) {
            captions.style.display = "block";
        } else {
            captions.style.display = "none";
        }
    });
}

search.addEventListener('keyup', searchBar);





