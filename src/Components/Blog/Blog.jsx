import PropTypes from 'prop-types';
const Blog = ({blog}) => {
   const {Title, Cover, Author, Author_Img, Posted_Date, Reading_Time ,HasTags} = blog;
    return (
        <div>
            <img src={Cover} alt={`Cover picture of the title ${Title}`} />
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
    blog: PropTypes.object.isRequired
}

export default Blog;