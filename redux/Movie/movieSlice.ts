import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieActions";

export interface InitialMovieState {
    movieList: IMovieSearchResult[]
    movie: IMovieDetails[],
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
    movie: [],
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
        builder.addCase(fetchMovies.fulfilled, (state, action: any) => {
            const { Search } = action.payload.data;
            console.log(action.payload.data);
            const movies: IMovieSearchResult[] = Search.map((movie: IMovieSearchResult) => {
                const { Title, Year, imdbID, Type, Poster } = movie;
                return { Title, Year, imdbID, Type, Poster }
            });
            state.movieList = movies;
        })
    }
});

export const {  addRemoveFavoriteMovies } = movieSlice.actions;

export default movieSlice.reducer;