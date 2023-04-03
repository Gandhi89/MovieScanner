import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../config/axiosConfig";

export const fetchMovieList = createAsyncThunk(
    'movies/fetchMovieList', 
    async (searchKeyword: string) => {
        return await axiosClient.get('', {
            params: {
                s: searchKeyword
            }
        });
    }
);