import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    //to load data we must use use effect
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;