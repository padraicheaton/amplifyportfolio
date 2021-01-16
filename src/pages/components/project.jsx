const Project = (props) => {
    return(
        <div className="project">
            <h4>{props.title}</h4>
            {props.imgUrl != null ? <img src={props.imgUrl} /> : <h4>No Image Provided</h4>}
            {props.desc != null ? <p>{props.desc}</p> : <p>No Description Provided</p>}
        </div>
    );
}

export default Project;