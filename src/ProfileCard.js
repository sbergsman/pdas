function ProfileCard({title, handle, image, description}){
    // const title = props.title;
    // const handle = props.handle;
    // the next line is same as above
    // const { title, handle } = props;
    // the above line was replaced and title and handle added to function

    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-1bl1">
                <img src={image} alt="pda logo" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
        </div>
        <div className="description">
            {description}
        </div>
        

    </div>
    );
}

export default ProfileCard;