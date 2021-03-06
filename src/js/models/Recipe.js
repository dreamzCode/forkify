import axios from 'axios';
import keyApi from '../config';


export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios(`${keyApi}get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.author;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('Something went wrong! :(');
        }
    }

    calcTime() {
        // Assuming that we need 15mins for every 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings (){
        this.servings = 4;
    }
}