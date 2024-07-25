import { useState } from "react"
import {  useNavigate } from 'react-router-dom';
import React from "react"
import createPosts from "./postUtils"
import { usePosts } from "./postContext";


function Field({...rest}){
    return <input {...rest}/>
}

export default function  CreatePost(){
    const [data,setData]=useState({
        postImage:"",
        author:"",
        location:"",
        description:""
    })

    const navigate = useNavigate()
    const{onPostAdded} = usePosts()

    return <section className="create-post-section">
        <form target="#" method="post" onSubmit={e=>{
            e.preventDefault();
            createPosts(data)
            .then((data)=>{
                onPostAdded()
                navigate('/posts/view')
            })
            

        }}>
            <div className="one-dot">
                <Field type="file" 
                onChange={(e)=>{
                    setData(data =>({...data ,
                        postImage:e.target.files[0]

                }))
                }}
                className="postImage"/>
            </div>
            <div className="two-dot">
                <Field type="text" placeholder="Author"
                onChange={(e)=>setData(data=>({...data,author:e.target.value

                }))}
                className="author"/>
                <Field type="text"  placeholder="Location"
                onChange={(e)=>setData(data=>({...data,location:e.target.value
                    
                }))}
                
                className="location"/>
            </div>
            <div className="one-dot">
                <Field type="text" placeholder="Description"
                onChange={(e)=>setData(data=>({...data,description:e.target.value
                    
                }))}
                className="discription"/>
            </div> 
            <div className="post-button">
                <button type="submit" className="insta-post-button">Post</button>
            </div>

        </form>
    </section>

}