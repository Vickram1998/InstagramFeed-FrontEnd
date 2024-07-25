import React from "react";
import { usePosts } from "./postContext";
import Card from "./Card";

export default function ViewPost() {
    const { posts } = usePosts();

    return (
        <div className='post-view'>
            {posts  && posts.map((post, index) => (
                <Card post={post} index={index} key={index} />
            ))}
        </div>
    );
}
