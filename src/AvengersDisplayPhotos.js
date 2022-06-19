
const AvengersDisplayPhotos = (props) => { 
    const name = props.details[0].name;
    const description = props.details[0].description;
    const image = props.details[0].thumbnail.path + '.' + props.details[0].thumbnail.extension;

    // console.log(image);
    return (
        <section>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={image} alt={`pic of ${props.details[0].name}`} />


            {/* <h2>{name}</h2>
            <p>{description}</p>
            <img src={image} alt={`image of ${name}`} /> */}
            {/* <div>
                {
                    props.photos.map((photo) => {
                        return (
                            <div key={photo.id}>
                                <p>{photo}</p>
                            </div>
                        )

                    })
                }
            </div> */}
        </section>
        

    )
}

export default AvengersDisplayPhotos;