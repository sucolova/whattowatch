import { useSelector} from "react-redux";
import {selectMovies} from '../form/formSlize.js';
import {Movie} from './Movie.js';

export function Movies() {
    const movies = useSelector(selectMovies);
    let moviesToRender = movies.results && movies.results.map(movie => {
        return (
            <Movie title={movie.title} image={movie.image} plot={movie.plot} stars={movie.stars} />
        ) 
    })

    return (

        <div>
            <h1>searchresults</h1>
            {moviesToRender}

        </div>

    )
}
