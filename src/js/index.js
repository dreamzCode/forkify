import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/**Global State of the App
 *  Search Object
 *  Current recipe Object
 *  Shopping list Object
 *  Liked Object
 */

 /**
  * SEARCH CONTROLLER
  */
 const state = {};

 const controlSearch = async () => {
    // Get query from view
    const query = searchView.getInput(); // TODO
    

    if (query) {
        // New Search Object and add to state
        state.search = new Search(query);
    };

    // Prepare UI for results;
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    
    // Search for recipes
    await state.search.getResults();

    // Render result on the UI
    clearLoader();
    searchView.renderResults(state.search.result);
  };
  
 elements.searchForm.addEventListener('submit', e => {
     e.preventDefault();
     controlSearch();
 });

 elements.searchResPages.addEventListener('click', e => {
     const btn = e.target.closest('.btn-inline');
    console.log(btn);
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
 });



 
 /**
  * RECIPE CONTROLLER
  */


const r = new Recipe(46956);
r.getRecipe();
console.log(r);

const controlRecipe = () => {
    const id = window.location.hash;
    console.log(id);
};

window.addEventListener('hashchange', controlRecipe);