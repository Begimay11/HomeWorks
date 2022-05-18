function FormatDate(date){
    return date.toLocaleDateString()
}

function CommentDate(props){
    return <div className="Comment-date">{FormatDate(props.date)}</div>
}
export default CommentDate