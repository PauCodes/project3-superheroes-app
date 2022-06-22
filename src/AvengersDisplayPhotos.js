
const AvengersDisplayPhotos = (props) => { 
    const name = props.details[0].name;
    const description = props.details[0].description;
    const image = props.details[0].thumbnail.path + '.' + props.details[0].thumbnail.extension;

   
    return (
        <section className='avengersSection'>
            <div className='cards avengersCard'>
                <h2 className='title' >{name}</h2>
                <p className='details'>{description}</p>
                <div className='imgContainer'>
                    <img className='characterImg' src={image} alt={`pic of ${props.details[0].name}`} />
                </div>
            </div>
        </section>
        

    )
}

export default AvengersDisplayPhotos;