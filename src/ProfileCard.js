function ProfileCard({title, handle}){
    // const title = props.title;
    // const handle = props.handle;
    // the next line is same as above
    // const { title, handle } = props;
    // the above line was replaced and title and handle added to function

    return (
    <div>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
    </div>
    );
}

export default ProfileCard;