import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
   const {Title, Cover, Author, Author_Img, Posted_Date, Reading_Time ,HasTags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={Cover} alt={`Cover picture of the title ${Title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                      <img className='w-14 rounded-full' src={Author_Img} alt="" />
                   <div className='ml-24'>
                      <h3 className='text-2xl'>{Author}</h3>
                      <p>{Posted_Date}</p>
                   </div>
                </div>
                <div>
                   <span>{Reading_Time} min read</span>
                   <button
                   onClick={() => handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-600'>
                    <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="4xl">{Title}</h2>
            <p>
                {
                    HasTags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;