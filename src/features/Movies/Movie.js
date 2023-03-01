import {getTrailer, selectTrailer, selectStatus} from './movieSlice.js';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

export function Movie(props) {
    const trailer = useSelector(selectTrailer);
    const status = useSelector(selectStatus);
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getTrailer(`https://imdb-api.com/en/API/Trailer/k_mvnkyhhz/${props.id}`))
        setClicked(true);
    }


    if (clicked === true && props.id === trailer.imDbId) {
        if (status === 'idle') {
            if(trailer.linkEmbed) {
                return (
                    <div className='trailer'>
                        <iframe src={trailer.linkEmbed} allowFullScreen='true' title='imdbTrailer' ></iframe>
                        <button onClick={() => setClicked(false)}>back</button>
                    </div>
                )

            } else {
                return (
                    <div className='trailer'>
                        <h1 className='message'>there is no trailer available</h1>
                    </div>
                )
            }
        } else if (status === 'pending') {
            return (
                <div className='trailer'>
                    <div className='pending'></div>
                </div>
            )
        } else if (status === 'rejected') {
            return (
                <div className='trailer'>
                    <h1 className='message'>something went wrong, please try again later</h1>
                </div>
            )

        }

    } else {
        return (
            <div className='movie'>
                <h3>{props.title}</h3>
                <img src={props.image} alt='cover' />
                <p>{props.plot}</p>
                <p>{props.stars}</p>
                <button onClick={handleClick}>Trailer</button>
            </div>
        )

    }

}
