function CommentAvatar(props){
    return <img src={props.author.avatarUrl} alt={props.author.name} className="Avatar" />
}
export default CommentAvatar