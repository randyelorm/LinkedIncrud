import React from 'react';
import PostedContent from '../POSTED_CONTENT/PostedContent';


const AllPost = ({arraydata, selected_id, editPost}) => {

      const eachPost = arraydata.map(
          (eachpost)=> {
                return(
                    <PostedContent 
                    eachpost_in_middle_array = {eachpost}
                    deletePostId = {selected_id}
                    editPost = {editPost}
                    />
                )
          }
      )



    return (
        <div>
         {eachPost}
        </div>
    );
}

export default AllPost;
