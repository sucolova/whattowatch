export function Movie(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt='cover' width='140px' />
            <p>{props.plot}</p>
            <p>{props.stars}</p>
        </div>
    )
}
