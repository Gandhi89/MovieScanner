import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../config/axiosConfig";
import { IMovieDetails } from "./movieSlice";

export const fetchMovieList = createAsyncThunk(
    'movies/fetchMovieList', 
    async (searchKeyword: string) => {
        const response =  await axiosClient.get('', {
            params: {
                s: searchKeyword
            }
        });
        return {
            data: {
                Search: response.data.Search || [],
                Error: response.data.Error || undefined
            }
        }
    }
);

export const fetchMovie = createAsyncThunk(
    'movies/fetchMovie', 
    async (imdbID: string) => {
        const response = await axiosClient.get('', {
            params: {
                i: imdbID
            }
        });
        return response.data as IMovieDetails;
    }
);