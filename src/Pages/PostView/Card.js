import { useRef, useState } from 'react'
import './Card.css'

export default function Card({post,index}){
    {console.log(post)}
    const[isLike,setIsLike]=useState(false)
    const [likeCount,setLikeCount]=useState(post.likes)
    const [isEditing,setIsEditing]=useState(false)
    const[comments,setComments]=useState([])
    const [showAllComments, setShowAllComments] = useState(false);
    const inputRef=useRef(null)
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        setComments([...comments, inputRef.current.value]);
        inputRef.current.value = '';
    };

    const toggleComments = () => {
        setShowAllComments(!showAllComments);
    };

    return<section className="instagram-profile-card">
        <section className="card-header">
            <div>
                <div className="card-header-name"> {post.name}</div>
                <div className="card-header-place">{post.location} </div>

            </div>
                <span className='card-header-ellipsis'>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </span>
        </section>
        <section className="card-picture">
            <div>
                <img src={`http://localhost:5500${post.postImage}`} alt=''/>
            </div>
        </section>
        <section className="card-action">
            <span className='like-icon' style={{cursor:'pointer'}} 
            onClick={()=>
                {setIsLike(!isLike);
                    (isLike?setLikeCount(likeCount-1):setLikeCount(likeCount + 1))
                
            }}>
            {isLike?<i className="fa-solid fa-heart fa-2xl" style={{color: "#db4059"}}></i>:<i className="fa-regular fa-heart fa-2xl" ></i>}</span>
             <div className='comment'>
                 <span onClick={()=>{setIsEditing(!isEditing);
                                setTimeout(() => {
                                    inputRef.current && inputRef.current.focus();
                                }, );
                }} ><i className="fa-regular fa-comment fa-2xl" style={{cursor:'pointer'}}></i></span> 
                 {isEditing && <div className='comment-form'>
                <form target='#' method='post' onSubmit={handleCommentSubmit}>
                <input  type='text'  ref={inputRef}/>    
                <button className='submit-btn' type='submit'><i className="fas fa-greater-than" style={{ color: 'white' }}></i></button>
                </form>
                </div>} 
             </div>
             <div className='share'>
                <span  ><i className="fa fa-paper-plane fa-2xl" aria-hidden="true" style={{cursor:'pointer'}}> </i></span>

             </div>
            
            
        
        </section>
        <section className='likes'>
            <div className='like'>{likeCount} likes</div>
            <span>{post.date}</span>
        </section>
        <section className='description'>
            <span>{post.description}</span>
        </section>
       
        <section className='comment'>
            {showAllComments
                    ? comments.map((comment, index) => (
                        <div key={index} className="comment-item">{comment}</div>
                    ))
                    : comments.length > 0 && <div className="comment-item">{comments[comments.length - 1]}</div>
                }
                {comments.length > 1 && !showAllComments && (
                    <button className="more-btn" onClick={toggleComments}>{comments.length} more Comments</button>
                )}
                {comments.length > 1 && showAllComments && (
                    <button className="hide-btn" onClick={toggleComments}><i className="fa-solid fa-caret-up fa-2xl"></i></button>
                )}
                
            </section>
        </section>}
