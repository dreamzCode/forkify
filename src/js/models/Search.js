import axios from 'axios';
import keyApi from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults () { 

        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        // const key = '462b1cc8d4f2730081462fbc65136320';
        // `https://forkify-api.herokuapp.com/api/search?q=${this.query}
        try {
        const res = await axios(`${keyApi}search?q=${this.query}`);
        console.log(res);
        this.result = res.data.recipes;
        } catch (error) {
            alert(error);
        }
    }

}