import { useSelector} from "react-redux";
import {selectMovies, selectStatus} from '../form/formSlize.js';
import {Movie} from './Movie.js';

export function Movies() {
    const movies = useSelector(selectMovies);
    const status = useSelector(selectStatus);
    let moviesToRender = movies.results && movies.results.map(movie => {
        return (
            <Movie title={movie.title} image={movie.image} plot={movie.plot} stars={movie.stars} id={movie.id} />
        ) 
    })

    if(status === 'rejected') {
        return (
            <h1>rejected</h1>
        )
    } else if (status === 'pending') {
        return(
            <h1>pending</h1>
        )
    } else if (status === 'idle') {
        return (
            <div className="movieList">
                {moviesToRender}
            </div>
        )
    }

}
