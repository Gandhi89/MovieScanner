import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie, fetchMovieList } from "./movieActions";

export interface InitialMovieState {
    movieList: IMovieSearchResult[]
    movie: IMovieDetails | null,
    favoriteMovies: IMovieSearchResult[]
}

interface IMovie {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;  
}

export interface IMovieSearchResult extends IMovie {
    imdbID: string;
} 


export interface IMovieDetails extends IMovie {
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Ratings: {
        Source: string;
        Value: string;
    }[];
}

const initialState: InitialMovieState = {
    movieList: [],
    movie: null,
    favoriteMovies: []
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addRemoveFavoriteMovies: (state, action) => {
            const favoriteMovies = state.favoriteMovies;
            const movie: IMovieSearchResult = action.payload;
            if (!!favoriteMovies.find(fav => fav.imdbID === movie.imdbID)) {
                state.favoriteMovies = favoriteMovies.filter(fav => fav.imdbID !== movie.imdbID );
            } else {
                state.favoriteMovies = [...favoriteMovies, movie];
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchMovieList.fulfilled, (state, action: any) => {
            const { Search } = action.payload.data;
            const movies: IMovieSearchResult[] = Search.map((movie: IMovieSearchResult) => {
                const { Title, Year, imdbID, Type, Poster } = movie;
                return { Title, Year, imdbID, Type, Poster }
            });
            state.movieList = movies;
        });
        builder.addCase(fetchMovie.fulfilled, (state, action: any) => {
            const { data } = action.payload;
            const movie = { 
                Rated: data.Rated,
                Released: data.Released,
                Runtime: data.Runtime,
                Genre: data.Genre,
                Director: data.Director,
                Writer: data.Writer,
                Actors: data.Actors,
                Plot: data.Plot,
                Language: data.Language,
                Country: data.Country,
                Awards: data.Awards,
                Ratings: data.Ratings,
                Title: data.Title,
                Year: data.Year,
                Type: data.Type,
                Poster: data.Poster
            }
            state.movie = movie;
        });
    }
});

export const {  addRemoveFavoriteMovies } = movieSlice.actions;

export default movieSlice.reducer;