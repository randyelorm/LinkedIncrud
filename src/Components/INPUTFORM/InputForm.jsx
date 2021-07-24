import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import profile_img from "../../Images/profile.jpeg"
import './inputform.css'

class InputForm extends Component {

    constructor (props) {
        super (props)

        this.state = {
            posted: "",
            show: false,
            disabled: true,
            background_color: "",
            color: "",
        }

    }

    handleClose = ()=> {
        this.setState({
            show:false
        })
    }


    handleShow = ()=> {
        this.setState({
            show:true
        })
    }


    handleChange = (event)=> {
        this.setState ({
            background_color: "#0A66C2" ,
            color: "white",
            disabled: false,
            [event.target.name]: event.target.value
        })    
    }

    handleSubmit = (event)=> {
      
        this.props.addPostFunction(this.state)
        this.setState({
            posted : "",
        })
        event.preventDefault()
        this.setState ({
            show:false
        })
      
    }


    render() {
        return (
            <>

            <Modal className = "mymodal" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create a Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                <div>
                         <img src={profile_img} className = "profile_img_form" alt="" />
                         <span className = "randy_davoh">Randy Davoh</span>
                </div> 
                 <form onSubmit = {this.handleSubmit}> 
                            <textarea
                            type="textarea" 
                            value = {this.state.posted} 
                            name = "posted" 
                            onChange = {this.handleChange} 
                            className = "modal_text_area"
                            placeholder = "What do you want to talk about?"
                            required = "required"
                        
                            />
                            <hr/>
                            <button type="submit"
                             disabled = {this.state.disabled}
                             style = {{backgroundColor: this.state.background_color, color: this.state.color}}
                             className = "post-btn"
                             >
                             Post
                             </button>
                    </form>   
                    </Modal.Body>
                    
            </Modal>

            <div class = "middle_top">
                        <div className = "img-form">
                            <img src={profile_img} className = "profile_img_form" alt="" />
                                <form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                                <Form.Control type="text"  
                                            className = "input" 
                                            onClick = {this.handleShow}
                                            placeholder = "Start a Post" 
                                           
                                            
                            />

                        
                        
                            </Form.Group>
                            
                            
                           
                                 </form>
                        
            
                        </div>


                        <div className = "input_icons">
                          <a href="" className=""> <i class="fas fa-image"></i> <span >Photo</span> </a>
                           <a href="" className=""><i class="fas fa-video"></i> <span>Video</span>  </a>
                           <a href="" className=""><i class="fas fa-calendar-week"></i> <span>Event</span> </a>
                           <a href="" className = ""><i class="far fa-newspaper"></i> <span>Write Article</span> </a>
                        </div>
             </div>
            </>
        );
    }
}

export default InputForm;
