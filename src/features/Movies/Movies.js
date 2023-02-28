import { useSelector} from "react-redux";
import {selectMovies, selectStatus} from '../form/formSlize.js';
import {Movie} from './Movie.js';

export function Movies() {
    const movies = useSelector(selectMovies);
    const status = useSelector(selectStatus);
    let moviesToRender = movies.results && movies.results.map(movie => {
        return (
            <Movie title={movie.title} image={movie.image} plot={movie.plot} stars={movie.stars} id={movie.id} key={movie.id} />
        ) 
    })

    if(status === 'rejected') {
        return (
            <h1>rejected</h1>
        )
    } else if (status === 'pending') {
        return(
            <div className="pendingList">
                <h1>Searching for Movies ....</h1>
                <div>
                    <div className="pending"></div>
                    <div className="pending"></div>
                    <div className="pending"></div>
                    <div className="pending"></div>
                    <div className="pending"></div>
                    <div className="pending"></div>
                    <div className="pending"></div>
                    <div className="pending"></div>
                </div>
            </div>
        )
    } else if (status === 'idle' && moviesToRender.length > 0) {
        console.log(moviesToRender.length);
        return (
            <div className="movieList">
                {moviesToRender}
            </div>
        )
    } else if (status === 'idle' && moviesToRender.length === 0) {
        return (
        <h1 className="message">no movies found for given input, please try again with diffrent search values</h1>
        )
    }

}
