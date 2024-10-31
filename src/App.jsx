import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([]);
 const [readingTime,setReadingTime] =useState(0);//setting default value as 0 cz it's time not an array like the previous one 

 const handleAddToBookmark= blog=>{
 
  const newBookmarks =[...bookmarks,blog];
  setBookmarks(newBookmarks);
 }
const handleMarkAsRead= (id,time) =>{
  // console.log("marking as read ",time);
  // setReadingTime(readingTime+time);
  const newReadingTime = readingTime+time;
  setReadingTime(newReadingTime);
  //remove the read mark from the book mark
  // console.log("Remove bookmark ",id);
  const remainingBookmarks= bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks);
}
  return (
    <>
     
  <Header></Header>
   <div className='md:flex max-w-7xl mx-auto'>

   <Blogs
    handleAddToBookmark={handleAddToBookmark}
    handleMarkAsRead={handleMarkAsRead}
    ></Blogs>

   <Bookmarks 
    bookmarks={bookmarks}
    readingTime={readingTime}
   ></Bookmarks>
   </div>
     
    
    </>
  )
}

export default App
