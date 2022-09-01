function Project(props) {
    return (
        <div className="box-container">
            <div className="box">
                <a href={props.link} target="_blank" ><img src={props.image} alt="Image is not supported for your browser" /></a>
                <div className="portfolio w3-hide-small">
                    <a href={props.link} target="_blank" className="btn w3-hide-small">click on image to Visit {props.name} website <i className="fa fa-solid fa-eye"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Project;