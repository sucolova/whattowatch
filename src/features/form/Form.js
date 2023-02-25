import { useSelector, useDispatch } from 'react-redux';
import {
    getMovies, 
    handleInputChange,
    handleTitleTypesUnChecked, 
    handleTitleTypesChecked, 
    handleGenresUnChecked,
    handleGenresChecked,
    selectTitle, 
    selectTitleTypes,
    selectGenres
} from './formSlize.js'; 



export function Form() {

    const title = useSelector(selectTitle);
    const titleTypes = useSelector(selectTitleTypes);
    const genres = useSelector(selectGenres);


    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();

        const titleTypesString = titleTypes.join();
        const genresString = genres.join();
        dispatch(getMovies(`https://imdb-api.com/API/AdvancedSearch/k_mvnkyhhz?
title=${title}
&title_type=${titleTypesString}
&genres=${genresString}`
        ));
    }

    const titleTypeChange = (e) => {
        if (e.target.checked) {
            dispatch(handleTitleTypesChecked(e.target.value))
            console.log(e.target.value)
        } else {
            dispatch(handleTitleTypesUnChecked(e.target.value))
        }
    }

    const genresChange = (e) => {
        if (e.target.checked) {
            dispatch(handleGenresChecked(e.target.value));
        } else {
            dispatch(handleGenresUnChecked(e.target.value));
        }
    }

    return (
        <form onSubmit={submit} >
            <label htmlFor="title">title </label>
            <input type="text" 
                id="title"
                name="title"
                value={title}
                onChange={(e) => dispatch(handleInputChange(e.target.value))}
            />

            <fieldset>
                <legend>Title Type</legend>
                <div>
                    <input type='checkbox' name='Feature Film' value='feature' onChange={titleTypeChange} />
                    <label htmlFor='Feature Film'>Feature Film</label>
                </div>
                <div>
                    <input type='checkbox' name='TV Movie' value='tv_movie' onChange={titleTypeChange} />
                    <label htmlFor='TV Movie'>TV Movie</label>
                </div>
                <div>
                    <input type='checkbox' name='TV Series' value='tv_series' onChange={titleTypeChange} />
                    <label htmlFor='TV Series'>TV Series</label>
                </div>
                <div>
                    <input type='checkbox' name='Documentary' value='documentary' onChange={titleTypeChange} />
                    <label htmlFor='Documentary'>Documentary</label>
                </div>
                <div>
                    <input type='checkbox' name='Mini-Series' value='tv_miniseries' onChange={titleTypeChange} />
                    <label htmlFor='Mini-Series'>Mini Series</label>
                </div>
                <div>
                    <input type='checkbox' name='Short Film' value='short' onChange={titleTypeChange} />
                    <label htmlFor='Short Film'>Short Film</label>
                </div>

            </fieldset>

            <fieldset>
                <legend>Genres</legend>
                <div>
                    <input type='checkbox' name='Action' value='action' onChange={genresChange} />
                    <label htmlFor='Action'>Feature Film</label>
                </div>
                <div>
                    <input type='checkbox' name='Adventure' value='adventure' onChange={genresChange} />
                    <label htmlFor='Adventure'>Adventure</label>
                </div>
                <div>
                    <input type='checkbox' name='Animation' value='animation' onChange={genresChange} />
                    <label htmlFor='Animation'>Animation</label>
                </div>
                <div>
                    <input type='checkbox' name='Biography' value='biography' onChange={genresChange} />
                    <label htmlFor='Biography'>Biography</label>
                </div>
                <div>
                    <input type='checkbox' name='Comedy' value='comedy' onChange={genresChange} />
                    <label htmlFor='Comedy'>Comedy</label>
                </div>
                <div>
                    <input type='checkbox' name='Crime' value='crime' onChange={genresChange} />
                    <label htmlFor='Crime'>Crime</label>
                </div>
                <div>
                    <input type='checkbox' name='Documentary' value='documentary' onChange={genresChange} />
                    <label htmlFor='Documentary'>Documentary</label>
                </div>
                <div>
                    <input type='checkbox' name='Drama' value='drama' onChange={genresChange} />
                    <label htmlFor='Drama'>Drama</label>
                </div>
                <div>
                    <input type='checkbox' name='Family' value='family' onChange={genresChange} />
                    <label htmlFor='Family'>Family</label>
                </div>
                <div>
                    <input type='checkbox' name='Fantasy' value='fantasy' onChange={genresChange} />
                    <label htmlFor='Fantasy'>Fantasy</label>
                </div>
                <div>
                    <input type='checkbox' name='Film-Noir' value='film_noir' onChange={genresChange} />
                    <label htmlFor='Film-Noir'>Film-Noir</label>
                </div>
                <div>
                    <input type='checkbox' name='Game-Show' value='game_show' onChange={genresChange} />
                    <label htmlFor='Game-Show'>Game-Show</label>
                </div>
                <div>
                    <input type='checkbox' name='History' value='history' onChange={genresChange} />
                    <label htmlFor='History'>History</label>
                </div>
                <div>
                    <input type='checkbox' name='Horror' value='horror' onChange={genresChange} />
                    <label htmlFor='Horror'>Horror</label>
                </div>
                <div>
                    <input type='checkbox' name='Music' value='music' onChange={genresChange} />
                    <label htmlFor='Music'>Music</label>
                </div>
                <div>
                    <input type='checkbox' name='Musical' value='musical' onChange={genresChange} />
                    <label htmlFor='Musical'>Musical</label>
                </div>
                <div>
                    <input type='checkbox' name='Mystery' value='mystery' onChange={genresChange} />
                    <label htmlFor='Mystery'>Mystery</label>
                </div>
                <div>
                    <input type='checkbox' name='News' value='news' onChange={genresChange} />
                    <label htmlFor='News'>News</label>
                </div>
                <div>
                    <input type='checkbox' name='Reality-TV' value='reality_tv' onChange={genresChange} />
                    <label htmlFor='Reality-TV'>Reality-TV</label>
                </div>
                <div>
                    <input type='checkbox' name='Romance' value='romance' onChange={genresChange} />
                    <label htmlFor='Romance'>Romance</label>
                </div>
                <div>
                    <input type='checkbox' name='Sci-Fi' value='sci_fi' onChange={genresChange} />
                    <label htmlFor='Sci-Fi'>Sci-Fi</label>
                </div>
                <div>
                    <input type='checkbox' name='Sport' value='sport' onChange={genresChange} />
                    <label htmlFor='Sport'>Sport</label>
                </div>
                <div>
                    <input type='checkbox' name='Talk-Show' value='talk_show' onChange={genresChange} />
                    <label htmlFor='Talk-Show'>Talk-Show</label>
                </div>
                <div>
                    <input type='checkbox' name='Thriller' value='thriller' onChange={genresChange} />
                    <label htmlFor='Thriller'>Thriller</label>
                </div>
                <div>
                    <input type='checkbox' name='War' value='war' onChange={genresChange} />
                    <label htmlFor='War'>War</label>
                </div>
                <div>
                    <input type='checkbox' name='Western' value='western' onChange={genresChange} />
                    <label htmlFor='Western'>western</label>
                </div>
            </fieldset>


            <input type='submit' value='search' />


        </form>
    );
}
