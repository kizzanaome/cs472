class Exercise3 {
    #movies = new Map();
    //key is the genre: string, value is array of movies
    // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }

    // Getter for movies
    getMovies() {
        return this.#movies;
    }

  

    add_genre(genre) {
        if (!this.#movies.has(genre)) {
            this.#movies.set(genre, [])
            return true;
        }

        return false;
    }

    add_movie_in_genre(genre, new_movie) {
        // add movie if movie id does not exist
        if (!this.#movies.has(genre)) return false;

        const genreMovies = this.#movies.get(genre);
        const exists = genreMovies.some(movie => movie.id === new_movie.id);
        if (exists) return false;
        genreMovies.push(new_movie);
        return true;
    }
    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        const genreMovies = this.#movies.get(genre);

        if (!this.#movies.has(genre)) return false;

        const movie = genreMovies.find(movie => movie.id === movie_id);
        if (!movie) return false;
        movie.title = new_title
        return true;
    }
    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        if (!this.#movies.has(genre)) return false;

        const genreMovies = this.#movies.get(genre);
        const index = genreMovies.findIndex(movie => movie.id === movie_id);

        if (index === -1) return false;

        genreMovies.splice(index, 1);
        return true;
    }
    get_movie_title_by_id(genre, movie_id) {
        // return the movie title
        if(!this.#movies.has(genre)) return '';
        const genreMovies = this.#movies.get(genre)
        const movie = genreMovies.find(movie => movie.id === movie_id)
        return movie ? movie.title : '';
    }
}

const ex3 = new Exercise3();

console.log(ex3.add_genre('thriller')); // true
console.log(ex3.add_genre('thriller')); // false (already exists)

console.log(ex3.add_movie_in_genre('thriller', { id: '1', title: 'The American' })); // true
console.log(ex3.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' }));     // true
console.log(ex3.add_movie_in_genre('thriller', { id: '1', title: 'Duplicate ID' })); // false

console.log(ex3.get_movie_title_by_id('thriller', '1')); // "The American"

console.log(ex3.update_movie_title_by_genre_and_movie_id('thriller', '1', 'Updated Title')); // true
console.log(ex3.get_movie_title_by_id('thriller', '1')); // "Updated Title"

console.log(ex3.delete_movie_by_genre_and_movie_id('thriller', '2')); // true
console.log(ex3.get_movie_title_by_id('thriller', '2')); // ""
