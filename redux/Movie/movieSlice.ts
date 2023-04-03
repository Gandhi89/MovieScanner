import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieActions";

export interface InitialMovieState {
    movieList: IMovieSearchResult[]
    movie: IMovie[],
    favoriteMovie: IMovie[]
}


interface IMovie {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;  
}

interface IMovieSearchResult extends IMovie {
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
    favoriteMovie: []
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addToFavoriteMovies: (state, action) => {
            const favMovies = state.favoriteMovie;
            favMovies.push(action.payload);
            state.favoriteMovie = favMovies;
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

export const {  addToFavoriteMovies } = movieSlice.actions;

export default movieSlice.reducer;