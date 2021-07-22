import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import profile_img from "../../Images/profile.jpeg"
import './edit.css'

class InputForm extends Component {

    constructor (props) {
        super (props)

        this.state = {
            posted: props.pre_edit_info.posted,
            id: props.pre_edit_info.id,
            show: true,
            disabled: true,
            background_color: "",
            color: "",
            
        }

    }

    // handleClose = ()=> {
    //     this.setState({
    //         show:false
    //     })
    // }


    // handleShow = ()=> {
    //     this.setState({
    //         show:true
    //     })
    // }


    handleChange = (event)=> {
        this.setState ({
            background_color: "#0A66C2" ,
            color: "white",
            disabled: false,
            [event.target.name]: event.target.value
        })    
    }

    handleSubmit = (event)=> {
      
        this.props.editPost(this.state.id, this.state )
        this.setState({
            posted : "",
        })
        
        event.preventDefault()
        // this.setState ({
        //     show:false
        // })
      
    }


    render() {
        return (
            <>

      

            <div class = "edit_top">
            <div className = "img_name_descrip">
                            <img src={profile_img} className = "posted_profile_img" alt="" />
                            <span className = "name_descrip">
                                <span className = "randy_davoh">Randy Davoh</span>  <br />
                                <span className = "descrip">Software developer trainee at Codetrain</span>
                            </span>
                        </div>
                        <div className = "">
                     
                        <br />
                                <form onSubmit = {this.handleSubmit}> 
                               
                             
                                 <div className = "edit-form-container"> 
                                 <textarea value = {this.state.posted} className = "edit_input"  type="text" onChange = {this.handleChange} name = "posted" /> 
                                 </div> 

                               <br />
                               <br/>
                               
                            <button type="submit"
                             disabled = {this.state.disabled}
                             style = {{backgroundColor: this.state.background_color, color: this.state.color}}
                             className = "post-btn"
                             onClick = {this.props.closeModal}
                             >
                             Post
                             </button>
                                </form>
                    
                        </div>


                
             </div>
            </>
        );
    }
}

export default InputForm;
