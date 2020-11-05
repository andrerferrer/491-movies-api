const list = document.querySelector('#results');

const insertMovies = (data) => {
  // { Search: [] }
  data.Search.forEach((result) => {
    const movie = `<li>
      <img src="${result.Poster}" alt="" />
      <p>${result.Title}</p>
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const callTheAPIAndUpdateDOM = (event) => {
  const list = document.querySelector('#results');
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
}

export { fetchMovies, callTheAPIAndUpdateDOM };