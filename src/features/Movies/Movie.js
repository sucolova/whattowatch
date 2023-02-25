import {getTrailer, selectTrailer} from './movieSlice.js';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

export function Movie(props) {

    const trailer = useSelector(selectTrailer);

    console.log(trailer.link);

    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getTrailer(`https://imdb-api.com/en/API/Trailer/k_mvnkyhhz/${props.id}`))
        setClicked(true);
    }

    if (clicked === true && props.id === trailer.imDbId) {
        return (
            <div className='trailer'>
                <iframe src={trailer.linkEmbed} scrolling='no' allowFullScreen='true' ></iframe>
                <button onClick={() => setClicked(false)}>back</button>
            </div>
        )
    } else {
        return (
            <div className='movie'>
                <h3>{props.title}</h3>
                <img src={props.image} alt='cover' width='140px' />
                <p>{props.plot}</p>
                <p>{props.stars}</p>
                <button onClick={handleClick}>Trailer</button>
            </div>
        )

    }

}
