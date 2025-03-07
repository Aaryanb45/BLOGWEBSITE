// import React from 'react'
// import {Link} from "react-router-dom"
// import PostAuthor from './PostAuthor'

// const PostsItem = ({postID, category, title,description,authorID,thumbnail}) => {
//     const shortDescription = description.length > 145 ? description.substr(0,145) + '...' : description;
//     const postTitle = title.length > 30 ? title.substr(0,145) + '...' : title;
//   return (
//     <article className="post">
//         <div className="post_thumbnail">
//             <img src={thumbnail} alt="{title}" />
//         </div>
//         <div className="post_content">
//             <Link to={`/posts/${postID}`}>
//             <h3>{postTitle}</h3>
//             </Link>
//             <p>{shortDescription}</p>
//             <div className="post_footer">
//                 <PostAuthor />
//                 <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
//             </div>
//         </div>
//     </article>
//   )
// }

// export default PostsItem



import React from 'react';
import { Link } from "react-router-dom";
import PostAuthor from './PostAuthor';

const PostsItem = ({ postID, category, title, description, authorID, thumbnail }) => {
  console.log(`Rendering PostsItem with postID: ${postID}`); // Debugging line

  const shortDescription = description && description.length > 145 ? description.substr(0, 145) + '...' : description || '';
  const postTitle = title && title.length > 30 ? title.substr(0, 30) + '...' : title || '';

  return (
    <article className="post">
      <div className="post_thumbnail">
        <img src={thumbnail} alt={title || 'Post Thumbnail'} />
      </div>
      <div className="post_content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post_footer">
          <PostAuthor authorID={authorID} />
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  );
}

export default PostsItem;
