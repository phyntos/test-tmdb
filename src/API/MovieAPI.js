import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        'api_key': '7c537609ce83bf7df65cd5b42b892860',
        'language': 'ru',
        'region': 'ru'
    }
})


export default class MovieAPI {
    static async getMovies(option, page) {
        try {
            const response = await instance.get('movie/' + option, {
                params: {
                    page: page
                }
            })
            return response.data
        } catch (err) {
            console.log(err)
        }
    }

    static async getMovie(id) {
        try {
            const response = await instance.get('movie/' + id)
            return response.data
        } catch (err) {
            console.log(err)
        }
    }

    static async getRecommendations(id) {
        try {
            const response = await instance.get('movie/' + id + '/recommendations')
            return response.data
        } catch (err) {
            console.log(err)
        }
    }

    static async getSearch(query, page) {
        try {
            const response = await instance.get('search/movie/', {
                params: {
                    query: query,
                    page: page
                }
            })
            return response.data
        } catch (err) {
            console.log(err)
        }
    }

    static async getGenres() {
        try {
            const response = await instance.get('genre/movie/list')
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
}
