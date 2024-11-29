import apiClient from './apiClient';

class HttpService {
    async register(userData) {
        const response = await apiClient.post('/api/register/', userData);
        return response.data;
    }

    async login(credentials) {
        const response = await apiClient.post('/api/token/', credentials);
        return response.data;
    }

    async refreshToken(refreshToken) {
        const response = await apiClient.post('/api/token/refresh/', { refresh: refreshToken });
        return response.data;
    }

    async getMovies(token) {
        const response = await apiClient.get('/api/movies/', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }

    async getMovieById(movieId, token) {
        const response = await apiClient.get(`/api/movies/${movieId}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }

    async addMovie(formData, token) {
        const response = await apiClient.post('/api/admin/add-movie/', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }

    async updateMovie(movieId, movieData, token) {
        const response = await apiClient.put(`/api/admin/update-movie/${movieId}/`, movieData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }

    async viewBookedMovies(token) {
        const response = await apiClient.get('/api/admin/view-booked/', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }

    async bookTicket(ticketData, token) {
        const response = await apiClient.post('/api/book-ticket/', ticketData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }

    async commentOnMovie(commentData, token) {
        const response = await apiClient.post('/comment/', commentData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }

    async likeMovie(movieId, token) {
        const response = await apiClient.post(`/api/movies/${movieId}/like/`, {}, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }

    async unlikeMovie(movieId, token) {
        const response = await apiClient.delete(`/api/movies/${movieId}/unlike/`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }

    async getLikedMovies(token) {
        const response = await apiClient.get(`/api/movies/liked-movies/`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }

    async getMoviePhoto() {
        const response = await apiClient.get(`/media`);
        return response.data;
    }

    async getTheatres(token) {
        const response = await apiClient.get(`/api/theatres/`, {
            headers: { Authorization: `Bearer ${token}` },
        });        
        return response.data;
    }

    async getAvailableSeats(showId, token) {
        const response = await apiClient.get(`/api/shows/${showId}/available-seats/`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }
}

export default new HttpService();
