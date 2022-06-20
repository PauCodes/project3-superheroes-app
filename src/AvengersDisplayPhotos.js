
const AvengersDisplayPhotos = (props) => { 
    const name = props.details[0].name;
    const description = props.details[0].description;
    const image = props.details[0].thumbnail.path + '.' + props.details[0].thumbnail.extension;

   
    return (
        <section>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={image} alt={`pic of ${props.details[0].name}`} />
        </section>
        

    )
}

export default AvengersDisplayPhotos;