import React, {useState} from 'react';
import "./posted.css"
import profile_img from "../../Images/profile.jpeg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Editform from "../EDITFORM/EditForm"

const PostedContent = ({eachpost_in_middle_array,deletePostId,editPost  }) => {

  const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  
  
  
  
  
    const handleDelete = (event)=> {

    deletePostId(eachpost_in_middle_array.id)

  }


    return (
      <>
        <Modal show={show} onHide={handleClose} className = "mymodal">
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
           <Editform pre_edit_info = {eachpost_in_middle_array} editPost = {editPost} closeModal = {handleClose} />

        </Modal.Body>
        
      </Modal >
        <div className = "posted_box">
    <div className = "img_name_descrip">
        <img src={profile_img} className = "posted_profile_img" alt="" />
          <span className = "name_descrip">
            <span className = "randy_davoh">Randy Davoh</span>  <br />
            <span className = "descrip">Software developer trainee at Codetrain</span>
        </span>
     </div>


          <br />
        
          <textarea className = "posted_input" type="text" value = {eachpost_in_middle_array.posted}  />
          <hr />

          <Button variant="primary" onClick = {handleShow}>Edit Post</Button>{' '}
          <Button variant="secondary" onClick = {handleDelete}>Delete Post</Button>{' '}
          
        </div>
        </>
    );
}

export default PostedContent;
