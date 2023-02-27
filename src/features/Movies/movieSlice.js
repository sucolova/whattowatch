import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getTrailer = createAsyncThunk(
    'movie/fetchTrailer',
    async(fetchString) => {
        const response = await fetch(fetchString);
        const json = await response.json();
        return json;
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        trailer: [],
        status: 'nothing'
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTrailer.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getTrailer.fulfilled, (state, action) => {
                state.status = 'idle';
                state.trailer = action.payload;
            })
            .addCase(getTrailer.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})

export default movieSlice.reducer;
export const selectTrailer = (state) => state.movie.trailer;
export const selectStatus = (state) => state.movie.status;
