import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className="md:w-1/3 bg-slate-300 ml-4 mt-3 pt-4">
           <h3 className="text-4xl bg-slate-500 text-center">Reading Time : {readingTime}</h3>
            <h2 className="text-3xl text-center">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;