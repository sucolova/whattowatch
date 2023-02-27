import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const getMovies = createAsyncThunk(
    'form/fetchMovies',
    async (fetchString) => {
        const response = await fetch(fetchString);
        const json = await response.json();
        return json;
    }
);

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        title: '',
        titleTypes: [],
        genres: [],
        status: 'nothing',
        movies: []
    },
    reducers: {
        handleInputChange: (state, action) => {
            state.title = action.payload;
        },
        handleTitleTypesChecked: (state, action) => {
            if (! state.titleTypes.find( element => element === action.payload)) { // there should never be a case where this is false 
                state.titleTypes.push(action.payload);
            } else {
                console.log('something went wrong');
            }
        },
        handleTitleTypesUnChecked: (state, action) => {
            state.titleTypes = state.titleTypes.filter(element => element !== action.payload); // remove the value from the checkbox from array
        },
        handleGenresChecked: (state, action) => {
            if (! state.genres.find(element => element === action.payload)) {
                state.genres.push(action.payload);
            } else {
                console.log('something went wrong');
            }
        },
        handleGenresUnChecked: (state, action) => {
            state.genres = state.genres.filter(element => element !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.status = 'idle';
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state) => {
                state.status = 'rejected';
            });

    }
})

export const {
    handleInputChange,
    handleTitleTypesChecked,
    handleTitleTypesUnChecked,
    handleGenresChecked,
    handleGenresUnChecked
} = formSlice.actions;
export const selectTitle = (state) => state.form.title;
export const selectMovies = (state) => state.form.movies;
export const selectTitleTypes = (state) => state.form.titleTypes;
export const selectGenres = (state) => state.form.genres;
export const selectStatus = (state) => state.form.status;

export default formSlice.reducer;

