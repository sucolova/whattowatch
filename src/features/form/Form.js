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

            <div className='title'>
                <label htmlFor="title">Title </label>
                <input type="text" 
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => dispatch(handleInputChange(e.target.value))}
                />
            </div>

            <fieldset>
                <legend>Title Type</legend>
                <div>
                    <input type='checkbox' id='Feature Film' value='feature' onChange={titleTypeChange} />
                    <label htmlFor='Feature Film'>Feature Film</label>
                </div>
                <div>
                    <input type='checkbox' id='TV Movie' value='tv_movie' onChange={titleTypeChange} />
                    <label htmlFor='TV Movie'>TV Movie</label>
                </div>
                <div>
                    <input type='checkbox' id='TV Series' value='tv_series' onChange={titleTypeChange} />
                    <label htmlFor='TV Series'>TV Series</label>
                </div>
                <div>
                    <input type='checkbox' id='Documentary' value='documentary' onChange={titleTypeChange} />
                    <label htmlFor='Documentary'>Documentary</label>
                </div>
                <div>
                    <input type='checkbox' id='Mini-Series' value='tv_miniseries' onChange={titleTypeChange} />
                    <label htmlFor='Mini-Series'>Mini Series</label>
                </div>
                <div>
                    <input type='checkbox' id='Short Film' value='short' onChange={titleTypeChange} />
                    <label htmlFor='Short Film'>Short Film</label>
                </div>

            </fieldset>

            <fieldset>
                <legend>Genres</legend>
                <div>
                    <input type='checkbox' id='Action' value='action' onChange={genresChange} />
                    <label htmlFor='Action'>Feature Film</label>
                </div>
                <div>
                    <input type='checkbox' id='Adventure' value='adventure' onChange={genresChange} />
                    <label htmlFor='Adventure'>Adventure</label>
                </div>
                <div>
                    <input type='checkbox' id='Animation' value='animation' onChange={genresChange} />
                    <label htmlFor='Animation'>Animation</label>
                </div>
                <div>
                    <input type='checkbox' id='Biography' value='biography' onChange={genresChange} />
                    <label htmlFor='Biography'>Biography</label>
                </div>
                <div>
                    <input type='checkbox' id='Comedy' value='comedy' onChange={genresChange} />
                    <label htmlFor='Comedy'>Comedy</label>
                </div>
                <div>
                    <input type='checkbox' id='Crime' value='crime' onChange={genresChange} />
                    <label htmlFor='Crime'>Crime</label>
                </div>
                <div>
                    <input type='checkbox' id='Documentary1' value='documentary' onChange={genresChange} />
                    <label htmlFor='Documentary1'>Documentary</label>
                </div>
                <div>
                    <input type='checkbox' id='Drama' value='drama' onChange={genresChange} />
                    <label htmlFor='Drama'>Drama</label>
                </div>
                <div>
                    <input type='checkbox' id='Family' value='family' onChange={genresChange} />
                    <label htmlFor='Family'>Family</label>
                </div>
                <div>
                    <input type='checkbox' id='Fantasy' value='fantasy' onChange={genresChange} />
                    <label htmlFor='Fantasy'>Fantasy</label>
                </div>
                <div>
                    <input type='checkbox' id='Film-Noir' value='film_noir' onChange={genresChange} />
                    <label htmlFor='Film-Noir'>Film-Noir</label>
                </div>
                <div>
                    <input type='checkbox' id='Game-Show' value='game_show' onChange={genresChange} />
                    <label htmlFor='Game-Show'>Game-Show</label>
                </div>
                <div>
                    <input type='checkbox' id='History' value='history' onChange={genresChange} />
                    <label htmlFor='History'>History</label>
                </div>
                <div>
                    <input type='checkbox' id='Horror' value='horror' onChange={genresChange} />
                    <label htmlFor='Horror'>Horror</label>
                </div>
                <div>
                    <input type='checkbox' id='Music' value='music' onChange={genresChange} />
                    <label htmlFor='Music'>Music</label>
                </div>
                <div>
                    <input type='checkbox' id='Musical' value='musical' onChange={genresChange} />
                    <label htmlFor='Musical'>Musical</label>
                </div>
                <div>
                    <input type='checkbox' id='Mystery' value='mystery' onChange={genresChange} />
                    <label htmlFor='Mystery'>Mystery</label>
                </div>
                <div>
                    <input type='checkbox' id='News' value='news' onChange={genresChange} />
                    <label htmlFor='News'>News</label>
                </div>
                <div>
                    <input type='checkbox' id='Reality-TV' value='reality_tv' onChange={genresChange} />
                    <label htmlFor='Reality-TV'>Reality-TV</label>
                </div>
                <div>
                    <input type='checkbox' id='Romance' value='romance' onChange={genresChange} />
                    <label htmlFor='Romance'>Romance</label>
                </div>
                <div>
                    <input type='checkbox' id='Sci-Fi' value='sci_fi' onChange={genresChange} />
                    <label htmlFor='Sci-Fi'>Sci-Fi</label>
                </div>
                <div>
                    <input type='checkbox' id='Sport' value='sport' onChange={genresChange} />
                    <label htmlFor='Sport'>Sport</label>
                </div>
                <div>
                    <input type='checkbox' id='Talk-Show' value='talk_show' onChange={genresChange} />
                    <label htmlFor='Talk-Show'>Talk-Show</label>
                </div>
                <div>
                    <input type='checkbox' id='Thriller' value='thriller' onChange={genresChange} />
                    <label htmlFor='Thriller'>Thriller</label>
                </div>
                <div>
                    <input type='checkbox' id='War' value='war' onChange={genresChange} />
                    <label htmlFor='War'>War</label>
                </div>
                <div>
                    <input type='checkbox' id='Western' value='western' onChange={genresChange} />
                    <label htmlFor='Western'>western</label>
                </div>
            </fieldset>


            <input className='submitButton' type='submit' value='search' />


        </form>
    );
}
