// The main concern of index.js is to be the entry point of your app

// Marie Kondo your JAVASCRIPT
// 3 things only on Index.js

// importings
import { fetchMovies, callTheAPIAndUpdateDOM } from './movies';
import { initSortable } from './plugins/init_sortable';

// add event listeners
const form = document.querySelector('#search-form');
form.addEventListener('submit', callTheAPIAndUpdateDOM);

// call functions
fetchMovies('harry potter'); // on 1st page load
initSortable();