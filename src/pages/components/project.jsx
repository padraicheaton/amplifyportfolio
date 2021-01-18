const Project = (props) => {
    return(
        <div className="project" anim={props.anim}>
            <h4>{props.title}</h4>
            {props.imgUrl != null ? <img src={props.imgUrl} /> : <h4>No Image Provided</h4>}
            {props.desc != null ? <p onAnimationEnd={props.animFinished}>{props.desc}</p> : <p onAnimationEnd={props.animFinished}>No Description Provided</p>}
        </div>
    );
}

export default Project;