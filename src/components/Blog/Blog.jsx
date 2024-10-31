import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{title,cover,author,author_img,posted_date,reading_time,hashtags}=blog;
    console.log(blog);
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`}></img>
            <div className='flex justify-between '>
            <div className='flex'>
                  <img className='w-14 rounded-full' src={author_img} alt="" />
                  <div className='ml-6'>
                    <h3 className='text-2xl '>{author}</h3>
                    <p>{posted_date}</p>
                </div> 
            </div>      
                <div>
                      <span>{reading_time} min read</span>
                  </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    // we are mapping hashtags cz it's an array
                    // hashtags.map(hash => <span> <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;