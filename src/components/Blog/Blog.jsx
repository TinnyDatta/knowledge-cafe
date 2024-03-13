import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='rounded-2xl w-full' src={cover} alt={`cover picture of the image ${title}`} />
            <div className='flex justify-between mt-8'>
                <div className='flex'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl my-4'> {title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={() => handleMarkAsRead (reading_time)}
             className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired

}

export default Blog;