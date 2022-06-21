import './AvengersInfo.css'

const AvengersDisplayPhotos = (props) => { 
    const name = props.details[0].name;
    const description = props.details[0].description;
    const image = props.details[0].thumbnail.path + '.' + props.details[0].thumbnail.extension;

   
    return (
        <section className='avengersSection'>
            <div className="avengersCards">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className='avengersImgContainer'>
                    <img className='avengersImg' src={image} alt={`pic of ${props.details[0].name}`} />
                </div>
            </div>
        </section>
        

    )
}

export default AvengersDisplayPhotos;