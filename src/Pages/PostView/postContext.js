import React, {useContext,useState,useEffect, useCallback} from "react"
import { loadAllPost } from "./postUtils"


const PostContext =React.createContext()

export  function PostContextProvider({children}){
    const [posts,setPosts]=useState([])
    const fetchPosts=useCallback(()=>{
        loadAllPost()
        .then(({posts})=>{
            setPosts(posts)
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
    })
    useEffect(()=>{
      fetchPosts()
    },[])
    return <PostContext.Provider value={{
        posts,
        onPostAdded:()=>{
            fetchPosts()
        }
    }}>
        {children}
    </PostContext.Provider>
}


export const usePosts=()=>useContext(PostContext)