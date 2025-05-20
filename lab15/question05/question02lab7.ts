type Movie = { id: string; title: string };

class Exercise3 {
    #movies: Map<string, Movie[]> = new Map();

    add_genre(genre: string): boolean {
        if (!this.#movies.has(genre)) {
            this.#movies.set(genre, []);
            return true;
        }
        return false;
    }

    add_movie_in_genre(genre: string, new_movie: Movie): boolean {
        const genreMovies = this.#movies.get(genre);
        if (!genreMovies) return false;

        if (genreMovies.some(movie => movie.id === new_movie.id)) return false;

        genreMovies.push(new_movie);
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre: string, movie_id: string, new_title: string): boolean {
        const genreMovies = this.#movies.get(genre);
        if (!genreMovies) return false;

        const movie = genreMovies.find(m => m.id === movie_id);
        if (movie) {
            movie.title = new_title;
            return true;
        }
        return false;
    }

    delete_movie_by_genre_and_movie_id(genre: string, movie_id: string): boolean {
        const genreMovies = this.#movies.get(genre);
        if (!genreMovies) return false;

        const index = genreMovies.findIndex(m => m.id === movie_id);
        if (index !== -1) {
            genreMovies.splice(index, 1);
            return true;
        }
        return false;
    }

    get_movie_title_by_id(genre: string, movie_id: string): string {
        const genreMovies = this.#movies.get(genre);
        if (!genreMovies) return '';

        const movie = genreMovies.find(m => m.id === movie_id);
        return movie ? movie.title : '';
    }
}


const db = new Exercise3();
db.add_genre('thriller');
db.add_movie_in_genre('thriller', { id: '1', title: 'The American' });
db.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' });
console.log(db.get_movie_title_by_id('thriller', '2'));
db.update_movie_title_by_genre_and_movie_id('thriller', '2', 'Arcadian Reloaded');
console.log(db.get_movie_title_by_id('thriller', '2'));