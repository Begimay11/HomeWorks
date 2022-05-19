import CommentDate from "./CommentDate"
import CommentWrapper from "./UI/CommentWrapper"
import UserInfo from "./UserInfo"

function Comment(props){
    return(
        <div className='Comment'>
           <UserInfo author={props.author}/>
           <CommentWrapper>
           <div className="Comment-text">{props.text}</div>
            <CommentDate date = {props.date}/>
           </CommentWrapper>
         </div> 
    )
}
export default Comment