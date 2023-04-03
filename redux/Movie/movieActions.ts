import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../config/axiosConfig";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies', 
    async (searchKeyword: string) => {
        return await axiosClient.get('', {
            params: {
                s: searchKeyword
            }
        });
    }
);