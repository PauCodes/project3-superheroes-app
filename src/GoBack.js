const GoBack = (props) => {
    
    console.log('Im in my button component ', props);

    return (
        <button onClick={props.goBackClick}>Go Back</button>

    )
}

export default GoBack;