import CommentDate from "./CommentDate"
import CommentWrapper from "./UI/CommentWrapper"
import UserInfo from "./UserInfo"
import './Comment.css'

function Comment(props){
    return(
        <CommentWrapper className="Comment">
           <UserInfo author={props.author}/>
           <div className="Comm">
           <div>{props.text}</div>
            <CommentDate date = {props.date}/>
           </div>
         </CommentWrapper> 
    )
}
export default Comment