import {API_KEY} from './constants';

export const generateUrl = path => `https://api.themoviedb.org/3${path}?api_key=${API_KEY}`;
